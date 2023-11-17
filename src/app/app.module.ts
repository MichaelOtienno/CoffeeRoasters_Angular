import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [

  { path: 'landing', component: LandingComponent },
  {path:'footer',component:FooterComponent},
  {path:'plan',component:PlanComponent},
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    PlanComponent,
    FooterComponent,
    PagenotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
