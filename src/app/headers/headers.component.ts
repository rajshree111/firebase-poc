import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  isLoggedIn: Boolean ;


  constructor(private authService: AuthService) { }

  ngOnInit() {
  
  this.authService.currentMessage.subscribe(value => {
      this.isLoggedIn = value;
      console.log('***************************' + this.isLoggedIn);
    });
  }

}
