import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { TelivisionComponent } from './pages/product/telivision/telivision.component';
import { FreezComponent } from './pages/product/freez/freez.component';
import { MobileComponent } from './pages/product/mobile/mobile.component';
import { CameraComponent } from './pages/product/camera/camera.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';
import { CardComponent } from './pages/card/card.component';
import { CustomDirective } from './directive/custom.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    TelivisionComponent,
    FreezComponent,
    MobileComponent,
    CameraComponent,
    DashboardComponent,
    LoginComponent,
    Comp1Component,
    Comp2Component,
    ParentComponent,
    ChildComponent,
    CardComponent,
    CustomDirective,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService, AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
