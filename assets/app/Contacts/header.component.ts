import { Component } from "@angular/core";
@Component({
selector:'app-header',
template:`
<header class="row">
<nav class="col-md-8 col-md-offset-2">
<ul class="nav nav-pills">
<li routerLinkActive="active"><a [routerLink]="['/contacts']">Contacts</a></li>
<li routerLinkActive="active"><a [routerLink]="['/rules']">Rules</a></li>
<li routerLinkActive="active"><a [routerLink]="['/emailtemplates']">Email Templates</a></li>
<li routerLinkActive="active"><a [routerLink]="['/campaign']">Campaign</a></li>
</ul>
</nav>
</header>
`
})
export class HeaderComponent{
}