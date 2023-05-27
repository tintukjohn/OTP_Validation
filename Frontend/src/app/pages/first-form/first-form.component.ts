import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

//random = 0;

  User = {
    email: '',
    message: '',
    otp:0
  }



  constructor(private userService:UserserviceService, private route: Router) { }
  ngOnInit(): void { }

  userVerify() {
    alert("Successful Login")
    //this.random = Math.floor(Math.random() * 10001);
    this.User.otp = Math.floor(Math.random() * 10001);
    this.userService.addUser(this.User).subscribe((res =>{
      alert(res);
    this.route.navigate(['/second'])
  }))
  }

}
