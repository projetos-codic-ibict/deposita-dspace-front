import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';
import { PRIVACY_PATH, END_USER_AGREEMENT_PATH, FEEDBACK_PATH, ABOUT_PATH, PRESENTATION_PATH, REPOSITORY_POLICY_PATH } from './info-routing-paths';
import { ThemedEndUserAgreementComponent } from './end-user-agreement/themed-end-user-agreement.component';
import { ThemedPrivacyComponent } from './privacy/themed-privacy.component';
import { ThemedFeedbackComponent } from './feedback/themed-feedback.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FeedbackGuard } from '../core/feedback/feedback.guard';
import { environment } from '../../environments/environment';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { RepositoryPolicyPageComponent } from './repository-policy-page/repository-policy-page.component';


const imports = [
  RouterModule.forChild([
    {
      path: FEEDBACK_PATH,
      component: ThemedFeedbackComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.feedback.title', breadcrumbKey: 'info.feedback' },
      canActivate: [FeedbackGuard]
    },
    {
      path: ABOUT_PATH,
      component: AboutPageComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.about.title', breadcrumbKey: 'info.about' },
    },

    {
      path: PRESENTATION_PATH,
      component: PresentationPageComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.presentation.title', breadcrumbKey: 'info.presentation' },
    },

    {
      path: REPOSITORY_POLICY_PATH,
      component: RepositoryPolicyPageComponent,
      resolve: { breadcrumb: I18nBreadcrumbResolver },
      data: { title: 'info.repository-policy.title', breadcrumbKey: 'info.repository-policy' },
    },
  ])
];

  if (environment.info.enableEndUserAgreement) {
    imports.push(
      RouterModule.forChild([
        {
          path: END_USER_AGREEMENT_PATH,
          component: ThemedEndUserAgreementComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.end-user-agreement.title', breadcrumbKey: 'info.end-user-agreement' }
        }
      ]));
  }
  if (environment.info.enablePrivacyStatement) {
    imports.push(
      RouterModule.forChild([
        {
          path: PRIVACY_PATH,
          component: ThemedPrivacyComponent,
          resolve: { breadcrumb: I18nBreadcrumbResolver },
          data: { title: 'info.privacy.title', breadcrumbKey: 'info.privacy' }
        }
      ]));
  }

@NgModule({
  imports: [
    ...imports
  ]
})
/**
 * Module for navigating to components within the info module
 */
export class InfoRoutingModule {
}
