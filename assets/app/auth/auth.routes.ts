import { Routes, RouterModule} from "@angular/router";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";

export const AUTH_ROUTES: Routes=[
{ path:'',redirectTo:'signin',pathMatch:'full' },
{ path:'signup',component:SignupComponent },
{path:'signin',component:SigninComponent}
];