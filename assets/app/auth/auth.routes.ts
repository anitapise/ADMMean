import { Routes, RouterModule} from "@angular/router";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
//import { VerifyComponent } from "./verify.component";
export const AUTH_ROUTES: Routes=[
{path:'',redirectTo:'signin',pathMatch:'full' },
{path:'verify_email/:id?',component:SigninComponent},
{path:'signup',component:SignupComponent },
{path:'signin',component:SigninComponent}

];