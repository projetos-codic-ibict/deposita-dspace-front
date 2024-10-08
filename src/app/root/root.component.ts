import { map, startWith } from 'rxjs/operators';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { combineLatest as combineLatestObservable, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { MetadataService } from '../core/metadata/metadata.service';
import { HostWindowState } from '../shared/search/host-window.reducer';
import { NativeWindowRef, NativeWindowService } from '../core/services/window.service';
import { AuthService } from '../core/auth/auth.service';
import { CSSVariableService } from '../shared/sass-helper/css-variable.service';
import { MenuService } from '../shared/menu/menu.service';
import { HostWindowService } from '../shared/host-window.service';
import { ThemeConfig } from '../../config/theme.model';
import { Angulartics2DSpace } from '../statistics/angulartics/dspace-provider';
import { environment } from '../../environments/environment';
import { slideSidebarPadding } from '../shared/animations/slide';
import { MenuID } from '../shared/menu/menu-id.model';
import { getPageInternalServerErrorRoute } from '../app-routing-paths';
import { hasValueOperator } from '../shared/empty.util';

@Component({
  selector: 'ds-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [slideSidebarPadding],
})
export class RootComponent implements OnInit {
  sidebarVisible: Observable<boolean>;
  slideSidebarOver: Observable<boolean>;
  collapsedSidebarWidth: Observable<string>;
  totalSidebarWidth: Observable<string>;
  theme: Observable<ThemeConfig> = of({} as any);
  notificationOptions;
  models;

  /**
   * Whether or not to show a full screen loader
   */
  @Input() shouldShowFullscreenLoader: boolean;

  /**
   * Whether or not to show a loader across the router outlet
   */
  @Input() shouldShowRouteLoader: boolean;

  constructor(
    @Inject(NativeWindowService) private _window: NativeWindowRef,
    private translate: TranslateService,
    private store: Store<HostWindowState>,
    private metadata: MetadataService,
    private angulartics2DSpace: Angulartics2DSpace,
    private authService: AuthService,
    private router: Router,
    private cssService: CSSVariableService,
    private menuService: MenuService,
    private windowService: HostWindowService,
    private renderer: Renderer2
  ) {
    this.notificationOptions = environment.notifications;
  }

  ngOnInit() {
    this.sidebarVisible = this.menuService.isMenuVisibleWithVisibleSections(MenuID.ADMIN);

    this.collapsedSidebarWidth = this.cssService.getVariable('--ds-collapsed-sidebar-width').pipe(hasValueOperator());
    this.totalSidebarWidth = this.cssService.getVariable('--ds-total-sidebar-width').pipe(hasValueOperator());

    const sidebarCollapsed = this.menuService.isMenuCollapsed(MenuID.ADMIN);
    this.slideSidebarOver = combineLatestObservable([sidebarCollapsed, this.windowService.isXsOrSm()])
      .pipe(
        map(([collapsed, mobile]) => collapsed || mobile),
        startWith(true),
      );

      if (this.router.url === getPageInternalServerErrorRoute()) {
        this.shouldShowRouteLoader = false;
      }

      // Adicionar a classe correta no ngOnInit
      this.applyBodyClass(this.router.url);

      // Inscrever-se em eventos de navegação para aplicar a classe correta
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.applyBodyClass(event.urlAfterRedirects);
        }
      });
    }

    private applyBodyClass(url: string) {
      if (url.startsWith('/home')) {
        this.renderer.addClass(document.body, 'home-page');
        this.renderer.removeClass(document.body, 'search-page');
        this.renderer.removeClass(document.body, 'items-page');
      } else if (url.startsWith('/search')) {
        this.renderer.addClass(document.body, 'search-page');
        this.renderer.removeClass(document.body, 'home-page');
        this.renderer.removeClass(document.body, 'items-page');
      } else if (url.startsWith('/items')) {
        this.renderer.addClass(document.body, 'items-page');
        this.renderer.removeClass(document.body, 'home-page');
        this.renderer.removeClass(document.body, 'search-page');
      } else {
        this.renderer.removeClass(document.body, 'home-page');
        this.renderer.removeClass(document.body, 'search-page');
        this.renderer.removeClass(document.body, 'items-page');
      }
    }
  }
