// tslint:disable-next-line:nx-enforce-module-boundaries
import { HomeComponent } from "./../../../../../libs/home/src/index";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// TODO: Make the lazy loading routes with @libs (https://github.com/nrwl/nx/issues/164#issuecomment-507221072).
// TODO: Add nested routes for services.
// TODO: Think about routing on mobile, if the sidebar should be not closed after click.
// TODO: Up - but what if user clicks services, what should happen? The menu should stay open with sidebar open only for that case, or always sidenav should be open/closed? Think about it.
const routes: Routes = [
  // TODO: Add external URL https://blog.ditectrev.com for Blog once it will be created.
  // TODO: Add external URL https://education.ditectrev.com for Education once it will be created.
  // TODO: Add external URL https://store.ditectrev.com for Store once it will be created.
  {
    path: "",
    component: HomeComponent,
    data: { animation: "home" },
    pathMatch: "full",
  },
  {
    data: { animation: "about-us" },
    loadChildren: "./../../../../../libs/about-us/src/index#AboutUsModule",
    path: "about-us",
  },
  {
    data: { animation: "contact" },
    loadChildren: "./../../../../../libs/contact/src/index#ContactModule",
    path: "contact",
  },
  {
    data: { animation: "copyrights" },
    loadChildren: "./../../../../../libs/copyrights/src/index#CopyrightsModule",
    path: "copyrights",
  },
  // TODO: Define subservices in services component.
  {
    data: { animation: "cyber-security" },
    loadChildren:
      "./../../../../../libs/cyber-security/src/index#CyberSecurityModule",
    path: "cyber-security",
  },
  {
    data: { animation: "digital-strategy" },
    loadChildren:
      "./../../../../../libs/digital-strategy/src/index#DigitalStrategyModule",
    path: "digital-strategy",
  },
  {
    data: { animation: "faq" },
    loadChildren: "./../../../../../libs/faq/src/index#FaqModule",
    path: "faq",
  },
  {
    data: { animation: "glossary" },
    loadChildren: "./../../../../../libs/glossary/src/index#GlossaryModule",
    path: "glossary",
  },
  {
    data: { animation: "methodology" },
    loadChildren:
      "./../../../../../libs/methodology/src/index#MethodologyModule",
    path: "methodology",
  },
  {
    data: { animation: "partnerships" },
    loadChildren:
      "./../../../../../libs/partnerships/src/index#PartnershipsModule",
    path: "partnerships",
  },
  {
    data: { animation: "privacy-and-security" },
    loadChildren:
      "./../../../../../libs/privacy-and-security/src/index#PrivacyAndSecurityModule",
    path: "privacy-and-security",
  },
  {
    data: { animation: "services" },
    loadChildren: "./../../../../../libs/services/src/index#ServicesModule",
    path: "services",
  },
  {
    data: { animation: "sitemap" },
    loadChildren: "./../../../../../libs/sitemap/src/index#SitemapModule",
    path: "sitemap",
  },
  {
    data: { animation: "software-development" },
    loadChildren:
      "./../../../../../libs/software-development/src/index#SoftwareDevelopmentModule",
    path: "software-development",
  },
  {
    data: { animation: "terms-of-use" },
    loadChildren:
      "./../../../../../libs/terms-of-use/src/index#TermsOfUseModule",
    path: "terms-of-use",
  },
  {
    data: { animation: "not-found" },
    loadChildren: "./../../../../../libs/not-found/src/index#NotFoundModule",
    path: "not-found",
  },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  {
    path: "**", // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: "not-found", // Alternative to component in routes, which redirects to specific path.
    pathMatch: "full",
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }), // On changing route keep user on the top of the page.
  ],
})
export class RoutingModule {}
