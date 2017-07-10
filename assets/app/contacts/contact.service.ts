import { Contact } from "./contact.model";
import { Http,Response,Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class ContactService{
constructor (private http:Http){}
saveContact(contact: Contact){
    const body=JSON.stringify(contact);
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log(headers);
    return this.http.post('http://localhost:3000/cont_app',body,{headers:headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw('Error occured '+error));
}
getContacts()
    {
        return this.http.get("http://localhost:3000/cont_app")
        .map(res => res.json());
    }
getContact(id)
    {
        return this.http.get("http://localhost:3000/cont_app/"+id)
        .map(res => res.json());
    }
deleteContact(id)
    {
    return this.http.delete("http://localhost:3000/cont_app/"+id)
    .map(res => res.json());
}
updateContact(id,info){
    return this.http.put("http://localhost:3000/cont_app/"+id,info)
    .map(res => res.json());
  }
}