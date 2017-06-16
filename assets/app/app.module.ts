import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { routing  } from "./app.routing";
import { AuthenticationComponent } from "./auth/authentication.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
//import { VerifyComponent } from "./auth/verify.component";
import { ContactComponent } from "./contacts/contact.component";
import { HeaderComponent } from "./contacts/header.component";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service";
@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
        ContactComponent,
        HeaderComponent
        //VerifyComponent
   ],
    imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,routing],
    providers:[AuthService],
    bootstrap: [AppComponent]
    
})
export class AppModule {

}