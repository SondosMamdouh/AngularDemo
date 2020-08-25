import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { Shoppingcart } from '../models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser:AppUser;
cart$:Observable<Shoppingcart>;
  constructor(private auth:AuthService,private shoppindCartServise:ShoppingCartService) {
  

   }
  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);


  this.cart$=await this.shoppindCartServise.getCart();
 


  }

  logout() {
    this.auth.logout();
  }

}
