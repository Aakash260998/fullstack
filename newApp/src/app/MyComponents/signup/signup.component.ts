import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup

 public user!:User
constructor(private userService:UserServiceService,private router:Router) {
   
}

  ngOnInit() {
   this.signupForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    name:new FormControl(''),
    location:new FormControl(''),
    phone:new FormControl('')
   })
  }
  submit(){
    this.userService.addUser(this.signupForm.value).subscribe(()=>{
      this.router.navigate(['/'])
    })
    
  }
}
