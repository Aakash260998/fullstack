import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credential } from 'src/app/Credential';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from 'src/app/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User
  loginForm!:FormGroup
  constructor(private userService:UserServiceService,   private router:Router) {    
  }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('') 
    })
  }

  submit(){
   
       this.userService.loginUser(this.loginForm.value).subscribe((data:any)=>{
         console.log(data)
        this.router.navigate(['/profile'], { queryParams: { profile: JSON.stringify(data) } })
    })
  }
}
