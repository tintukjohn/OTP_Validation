import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {
  User = {
    otp: '',
    message: ''
  }

  constructor(private userService:UserserviceService, private route: Router) { }
  ngOnInit(): void { }

  userVerify() {
    alert("Successful Login")
    this.userService.userLogin(this.User);
    this.route.navigate(['/welcome'])
  }

}
