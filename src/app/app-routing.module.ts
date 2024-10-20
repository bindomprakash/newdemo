import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductComponent } from './pages/product/product.component';
import { rolemanagerGuard } from './gaurd/rolemanager.guard';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { TelivisionComponent } from './pages/product/telivision/telivision.component';
import { MobileComponent } from './pages/product/mobile/mobile.component';
import { FreezComponent } from './pages/product/freez/freez.component';
import { CameraComponent } from './pages/product/camera/camera.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './gaurd/auth.guard';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { ParentComponent } from './pages/parent/parent.component';
import { permissionGuard } from './gaurd/permission.guard';
import { TemplateComponent } from './pages/template/template.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ClockComponent } from './pages/clock/clock.component';
import { Table2Component } from './pages/table2/table2.component';
import { CommontableComponent } from './pages/commontable/commontable.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  {
    path: "product",
    children: [
      {
        path: '', component: ProductComponent
      },
      {
        path: 'telivision', component: TelivisionComponent
      },
      {
        path: "mobile", component: MobileComponent
      },
      {
        path: "freeze", component: FreezComponent
      },
      {
        path: "camera", component: CameraComponent
      },

    ]
  },
  {
    path: "table1", component: CommontableComponent
  },
  {
    path: "table2", component: Table2Component
  },
  { path: "clock", component: ClockComponent },
  { path: "comp1", component: Comp1Component },
  { path: "comp2", component: Comp2Component },
  { path: 'login', component: LoginComponent },
  { path: 'parent', component: ParentComponent },
  { path: "template", component: TemplateComponent },
  { path: "emp", component: EmployeeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'registration', loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule) },
  { path: 'admin', canMatch: [rolemanagerGuard], loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'admin', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
  { path: 'service', canLoad: [permissionGuard], loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
