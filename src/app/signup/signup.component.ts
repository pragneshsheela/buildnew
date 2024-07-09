import { Component,OnInit } from '@angular/core';
import { Route,Router,ActivatedRoute } from '@angular/router'
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { first } from 'rxjs';


@Component({
  selector: 'app-signup',  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  userData:any;
  signUpform = this.formBuilder.group({
            name: new FormControl(''),
            phone: new FormControl(''),
            email:new FormControl(''),
            password:new FormControl(''),
            c_password:new FormControl('')
        });
    

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) { 
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }

  ngOnInit(){
    console.log("here");
    
  }

  signUp(){
    console.log("here");
     console.warn(this.signUpform.value);
  }


}
