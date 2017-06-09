import { Component,OnInit } from "@angular/core";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";
@Component({
selector:'app-signup',
templateUrl:'./signup.component.html'
})
export class SignupComponent implements OnInit{
    myForm : FormGroup;
    constructor (private authService: AuthService,private router: Router) {}
    onSubmit()
    {
        //creating new user and saves it in to database
       const user = new User(
        this.myForm.value.email,
        this.myForm.value.password,
        this.myForm.value.name
       );
       this.authService.signup(user)
       .subscribe(
           data => console.log(data),
           error => console.log(error)
       );
       //sending mail to new user
        this.myForm.reset();
    }
    onCancel(){
        this.router.navigate(['/']);
    }
ngOnInit()
{
this.myForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,
    [Validators.required,
    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    password:new FormControl(null,Validators.required)
});
}
}