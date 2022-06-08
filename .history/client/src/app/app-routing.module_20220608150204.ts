import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FashionDesigningComponent } from './components/courses/fashion-designing/fashion-designing.component';
import { HairStylingComponent } from './components/courses/hair-styling/hair-styling.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';




const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'hair', component: HairStylingComponent},
    { path: 'fashion', component: FashionDesigningComponent},
    { path: 'dashborad', }
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: '**', component: NotFoundComponent }
  ]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }