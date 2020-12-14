import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from '../contact/contact.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {ProfileComponent} from '../profile/profile.component';
import {SettingsComponent} from '../settings/settings.component';
import {DashboardComponent} from '../dashboard/dashboard.component'
import {TrendsComponent} from '../trends/trends.component';
import {CreateProfileComponent} from '../create-profile/create-profile.component'
import {LoginComponent} from '../login/login.component'
import { ngModuleJitUrl } from '@angular/compiler';

const glosRoutes: Routes = [
    {path: 'contact', component: ContactComponent},
    {path: 'navigation', component: NavigationComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'trends', component: TrendsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create-profile', component: CreateProfileComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(glosRoutes), CommonModule],
    exports: [RouterModule],
})
export class GlosRoutesRoutingModule {}