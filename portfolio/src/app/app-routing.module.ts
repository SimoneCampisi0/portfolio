import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ChiSonoComponent} from "./chi-sono/chi-sono.component";
import {ProgettiComponent} from "./progetti/progetti.component";
import {ContattamiComponent} from "./contattami/contattami.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'chi-sono', component: ChiSonoComponent },
  { path: 'progetti', component: ProgettiComponent },
  { path: 'contattami', component: ContattamiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
