import { Component,OnInit } from "@angular/core";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
@Component({
selector:'app-signup',
templateUrl:'./signup.component.html'
})
export class SignupComponent implements OnInit{
    myForm : FormGroup;
    constructor (private authService: AuthService) {}
    onSubmit()
    {
        console.log(this.myForm);
        this.myForm.reset();
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