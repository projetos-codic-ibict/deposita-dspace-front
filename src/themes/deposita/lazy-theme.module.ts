import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegistriesModule } from '../../app/admin/admin-registries/admin-registries.module';
import { AdminSearchModule } from '../../app/admin/admin-search-page/admin-search.module';
import {
  AdminWorkflowModuleModule
} from '../../app/admin/admin-workflow-page/admin-workflow.module';
import {
  BitstreamFormatsModule
} from '../../app/admin/admin-registries/bitstream-formats/bitstream-formats.module';
import { BrowseByModule } from '../../app/browse-by/browse-by.module';
import {
  CollectionFormModule
} from '../../app/collection-page/collection-form/collection-form.module';
import { CommunityFormModule } from '../../app/community-page/community-form/community-form.module';
import { CoreModule } from '../../app/core/core.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditItemPageModule } from '../../app/item-page/edit-item-page/edit-item-page.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdlePreloadModule } from 'angular-idle-preload';
import {
  JournalEntitiesModule
} from '../../app/entity-groups/journal-entities/journal-entities.module';
import { MyDspaceSearchModule } from '../../app/my-dspace-page/my-dspace-search.module';
import { MenuModule } from '../../app/shared/menu/menu.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePageModule } from '../../app/profile-page/profile-page.module';
import { RegisterEmailFormModule } from '../../app/register-email-form/register-email-form.module';
import {
  ResearchEntitiesModule
} from '../../app/entity-groups/research-entities/research-entities.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SearchPageModule } from '../../app/search-page/search-page.module';
import { SharedModule } from '../../app/shared/shared.module';
import { StatisticsModule } from '../../app/statistics/statistics.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageModule } from '../../app/home-page/home-page.module';
import { AppModule } from '../../app/app.module';
import { ItemPageModule } from '../../app/item-page/item-page.module';
import { RouterModule } from '@angular/router';
import { CommunityListPageModule } from '../../app/community-list-page/community-list-page.module';
import { InfoModule } from '../../app/info/info.module';
import { StatisticsPageModule } from '../../app/statistics-page/statistics-page.module';
import { CommunityPageModule } from '../../app/community-page/community-page.module';
import { CollectionPageModule } from '../../app/collection-page/collection-page.module';
import { SubmissionModule } from '../../app/submission/submission.module';
import { MyDSpacePageModule } from '../../app/my-dspace-page/my-dspace-page.module';
import { SearchModule } from '../../app/shared/search/search.module';
import {
  ResourcePoliciesModule
} from '../../app/shared/resource-policies/resource-policies.module';
import { ComcolModule } from '../../app/shared/comcol/comcol.module';
import { RootModule } from '../../app/root.module';
import { BrowseByPageModule } from '../../app/browse-by/browse-by-page.module';
import { ResultsBackButtonModule } from '../../app/shared/results-back-button/results-back-button.module';
import { SharedBrowseByModule } from '../../app/shared/browse-by/shared-browse-by.module';
import { ItemVersionsModule } from '../../app/item-page/versions/item-versions.module';
import { ItemSharedModule } from 'src/app/item-page/item-shared.module';

import { TopLevelCommunityListComponent } from './app/home-page/top-level-community-list/top-level-community-list.component';
import { SearchFormComponent } from './app/shared/search-form/search-form.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { ItensCardComponent } from './app/home-page/itens-card/itens-card.component';
import { PartnerBoxComponent } from './app/home-page/partner-box/partner-box.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { SearchPageComponent } from './app/search-page/search-page.component';
import { ConfigurationSearchPageComponent } from './app/search-page/configuration-search-page.component';

import { SearchFiltersComponent } from './app/shared/search/search-filters/search-filters.component';
import { SearchResultsComponent } from './app/shared/search/search-results/search-results.component';
import { SearchSidebarComponent } from './app/shared/search/search-sidebar/search-sidebar.component';
import { SearchSettingsComponent } from './app/shared/search/search-settings/search-settings.component';
import { SearchComponent } from './app/shared/search/search.component';

import { ObjectListComponent } from './app/shared/object-list/object-list.component';
import { CommunityListElementComponent } from './app/shared/object-list/community-list-element/community-list-element.component';
import { ItemSearchResultListElementComponent } from './app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { PublicationSidebarSearchListElementComponent } from './app/shared/object-list/sidebar-search-list-element/item-types/publication-sidebar-search-list-element.component';

import { ItemPageComponent } from './app/item-page/simple/item-page.component';
import { AdminToolsComponent } from './app/admin-tools/admin-tools.component';
import { FullItemPageComponent } from './app/item-page/full/full-item-page.component';
import { FullFileSectionComponent } from './app/item-page/full/field-components/file-section/full-file-section.component';
import { HorizontalNavComponent } from './app/horizontal-nav/horizontal-nav.component';
import { UntypedItemComponent } from './app/item-page/simple/item-types/untyped-item/untyped-item.component';

import { AuthNavMenuComponent } from './app/shared/auth-nav-menu/auth-nav-menu.component';
const DECLARATIONS = [
  TopLevelCommunityListComponent,
  SearchFormComponent,
  HomePageComponent,
  ItensCardComponent,
  PartnerBoxComponent,
  LoginPageComponent,
  SearchPageComponent,
  ConfigurationSearchPageComponent,
  SearchFiltersComponent,
  SearchResultsComponent,
  SearchSidebarComponent,
  SearchSettingsComponent,
  SearchComponent,
  ObjectListComponent,
  CommunityListElementComponent,
  ItemSearchResultListElementComponent,
  PublicationSidebarSearchListElementComponent,
  ItemPageComponent,
  AdminToolsComponent,
  FullItemPageComponent,
  FullFileSectionComponent,
  HorizontalNavComponent,
  UntypedItemComponent,
  AuthNavMenuComponent
];

@NgModule({
  imports: [
    AdminRegistriesModule,
    AdminSearchModule,
    AdminWorkflowModuleModule,
    AppModule,
    RootModule,
    BitstreamFormatsModule,
    BrowseByModule,
    BrowseByPageModule,
    ResultsBackButtonModule,
    CollectionFormModule,
    CollectionPageModule,
    CommonModule,
    CommunityFormModule,
    CommunityListPageModule,
    CommunityPageModule,
    CoreModule,
    DragDropModule,
    ItemSharedModule,
    ItemPageModule,
    EditItemPageModule,
    ItemVersionsModule,
    FormsModule,
    HomePageModule,
    HttpClientModule,
    IdlePreloadModule,
    InfoModule,
    JournalEntitiesModule,
    MenuModule,
    MyDspaceSearchModule,
    NavbarModule,
    NgbModule,
    ProfilePageModule,
    RegisterEmailFormModule,
    ResearchEntitiesModule,
    RouterModule,
    ScrollToModule,
    SearchPageModule,
    SharedModule,
    SharedBrowseByModule,
    StatisticsModule,
    StatisticsPageModule,
    StoreModule,
    StoreRouterConnectingModule,
    TranslateModule,
    SubmissionModule,
    MyDSpacePageModule,
    MyDspaceSearchModule,
    SearchModule,
    FormsModule,
    ResourcePoliciesModule,
    ComcolModule
  ],
  declarations: DECLARATIONS,
})

/**
 * This module serves as an index for all the components in this theme.
 * It should import all other modules, so the compiler knows where to find any components referenced
 * from a component in this theme
 * It is purposefully not exported, it should never be imported anywhere else, its only purpose is
 * to give lazily loaded components a context in which they can be compiled successfully
 */
class LazyThemeModule {
}
