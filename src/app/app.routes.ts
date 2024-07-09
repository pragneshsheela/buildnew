import { RouterModule,Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
     { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports : [RouterModule]
})

export class AppRoutingModule {}

