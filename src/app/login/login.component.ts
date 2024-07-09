import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
    userData:any;  
    loginform = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),    
   });
 constructor(
        private formBuilder: FormBuilder,
        private formGroup :FormGroup,
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

  login(userData:any){
    console.log("here",userData);
  }

}
