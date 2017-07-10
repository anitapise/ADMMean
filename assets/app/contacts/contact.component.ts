import { Component,OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormGroup,FormControl,Validators,NgForm } from "@angular/forms";
import { Contact } from "./contact.model";
import {ActivatedRoute, Params, Router } from "@angular/router";
import { FileUploader } from 'ng2-file-upload';
@Component({
    selector: 'contacts-app',
    templateUrl: './contact.component.html',
})
export class ContactComponent  implements OnInit{
    public uploader : FileUploader = new FileUploader({url:'http://localhost:3000/upload'});
    contactForm : FormGroup;
    contacts:Contact;
    public route:ActivatedRoute;
    addopt : string = 'single';
    //myFile : string;
    constructor(private contactService: ContactService, private router: Router) 
    {
        this.getContacts();
    }
public Multiple=false;
addoneContact(){
this.Multiple=false;
}
addmultipleContact(){
this.Multiple=true;
}
// uploadResume(){
//     this.contactForm.value.resume_upload.upload();
// }
deleteContact(id){
    this.contactService.deleteContact(id)
      .subscribe(()=>{
        this.getContacts();
      });
}
// id = this.route.snapshot.params['id']
// getContact(){
//     this.contactService.getContact(this.id)
//     .subscribe(contacts=>{
//           this.contacts = contacts;
//    })
// }
// updateContact(){
//     this.contactService.updateContact(this.id,this.contacts)
//         .subscribe(()=> this.goBack())
//   }
goBack(){
    this.router.navigate(['/contact'])
  }
getContacts(){
        this.contactService.getContacts()
        .subscribe(contacts=>{
          this.contacts = contacts;
        })
}

addContact(contactFrm:NgForm)
{
    if (this.addopt=='single')
    {
        const contact = new Contact(
            this.contactForm.value.name,
            this.contactForm.value.email,
            this.contactForm.value.phone,
            this.contactForm.value.current_location,
            this.contactForm.value.total_experience,
            this.contactForm.value.current_organization,
            this.contactForm.value.job_role,
            this.contactForm.value.gender,
            this.contactForm.value.social_profile_link,
            this.contactForm.value.dateofbirth,
            this.contactForm.value.resume_upload
        );
       this.contactService.saveContact(contact)
            .subscribe(
                data => {
                console.log('in subscr'+contact);
                localStorage.setItem('token', data.token);
                localStorage.setItem('contactId', data.contactId);
                    console.log(data);
                    this.router.navigateByUrl('/contact');
                },
                error => console.error(error)
            );
            contactFrm.resetForm();
    }
    else
    {
    
    }
}
ngOnInit()
{   this.contactForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,
    [Validators.required,
    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    phone:new FormControl(),
    current_location: new FormControl(null,Validators.required),
    total_experience: new FormControl(null,Validators.required),
    current_organization: new FormControl(null,Validators.required),
    job_role: new FormControl(null,Validators.required),
    gender: new FormControl(null,Validators.required),
    social_profile_link: new FormControl(),
    dateofbirth: new FormControl(null,Validators.required),
    resume_upload: new FormControl()
    });
}
}