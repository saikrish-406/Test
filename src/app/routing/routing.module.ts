import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { SignUpComponent } from '../component/sign-up/sign-up.component';
import { LoginComponent } from '../component/login/login.component';
import { DetailsComponent } from '../component/details/details.component';

const routes:Routes=[
    {path:'signUp', component:SignUpComponent},
    {path:'logIn',component:LoginComponent},
    {path:'details',component:DetailsComponent},
    {path:'',redirectTo:'/signUp',pathMatch:'full'}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting{}