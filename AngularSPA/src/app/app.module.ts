import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FurnituresCarouselComponent } from './furnitures-carousel/furnitures-carousel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChairsComponent } from './categories/chairs/chairs.component';
import { BedsSofasComponent } from './categories/beds-sofas/beds-sofas.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ModalPopupComponent } from './items/modal-popup/modal-popup.component';
import { FilterPipe } from './items/filter.pipe';
import { AuthGuard } from './auth.guard';
import { RegistrationService } from './services/registration.service';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesComponent } from './categories/tables/tables.component';



@NgModule({
  declarations: [
    AppComponent,
    FurnituresCarouselComponent,
    AboutusComponent,
    ItemsComponent,
    ChairsComponent,
    BedsSofasComponent,
    AuthenticationComponent,
    ModalPopupComponent,
    FilterPipe,
    LoginComponent,
    NavbarComponent,
    TablesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot() 
  ],
  entryComponents: [
    ItemsComponent,
    ModalPopupComponent
  ],
  providers: [RegistrationService,AuthGuard,AuthenticationComponent,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
