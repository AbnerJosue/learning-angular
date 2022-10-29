import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  
  user = {
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res => { 
        localStorage.setItem('token',res.token)
        this.router.navigate(['/private'])
      },
      err=> console.log(err)
    )
  }

}
