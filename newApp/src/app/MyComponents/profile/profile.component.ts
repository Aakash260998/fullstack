import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any
  constructor(private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.queryParamMap.subscribe((params: any) =>{
      this.profile=JSON.parse(params.params.profile)
    })

  }

}
