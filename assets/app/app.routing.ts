import { Routes, RouterModule} from "@angular/router";

import { AUTH_ROUTES } from "./auth/auth.routes";
import { CONTACT_ROUTES } from "./contacts/contact.routes";
import { ContactComponent } from "./contacts/contact.component";
import { AuthenticationComponent } from "./auth/authentication.component";
const APP_ROUTES: Routes=[
{path:'',redirectTo:'/auth/signin',pathMatch:'full'},
{path:'auth',component:AuthenticationComponent, children:AUTH_ROUTES},
{path:'contacts',component:ContactComponent, children:CONTACT_ROUTES},
];
export const routing=RouterModule.forRoot(APP_ROUTES);