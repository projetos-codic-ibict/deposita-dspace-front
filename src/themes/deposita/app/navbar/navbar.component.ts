import { Component } from '@angular/core';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slide, slideMobileNav } from '../../../../app/shared/animations/slide';
import { environment } from 'src/environments/environment';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav, slide]
})
export class NavbarComponent extends BaseComponent {
  isDropdownOpen = false;
  communityEndpoint = environment.communityEndpoint;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

}
