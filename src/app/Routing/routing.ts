import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from '../contact/contact.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {ProfileComponent} from '../profile/profile.component';
import {SettingsComponent} from '../settings/settings.component';
import {TrendsComponent} from '../trends/trends.component';
import { ngModuleJitUrl } from '@angular/compiler';
import {DashboardComponent} from '../dashboard/dashboard.component';
const glosRoutes: Routes = [
    {path: 'contact', component: ContactComponent},
    {path: 'navigation', component: NavigationComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'trends', component: TrendsComponent},
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '**', redirectTo: ''},
    {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(glosRoutes), CommonModule],
    exports: [RouterModule],
})
export class GlosRoutesRoutingModule {}