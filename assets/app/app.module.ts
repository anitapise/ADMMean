import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { routing  } from "./app.routing";
import { AuthenticationComponent } from "./auth/authentication.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { FileSelectDirective } from "ng2-file-upload";
import { ContactComponent } from "./contacts/contact.component";
import { HeaderComponent } from "./contacts/header.component";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactService } from "./contacts/contact.service";
@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        SigninComponent,
        NavbarComponent,
        SignupComponent,
        ContactComponent,
        HeaderComponent,
        FileSelectDirective
        ],
    imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,routing],
    providers:[AuthService,ContactService],
    bootstrap: [AppComponent]

})
export class AppModule {

}
