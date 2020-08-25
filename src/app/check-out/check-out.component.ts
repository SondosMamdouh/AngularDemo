import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Shoppingcart } from '../models/shopping-cart';
import {  Observable } from 'rxjs';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
    
    cart$:Observable< Shoppingcart>;

  constructor( private shoppingCartServise:ShoppingCartService,private orderService:OrderService)
  {}
 
  async ngOnInit() {
    this.cart$=await this.shoppingCartServise.getCart();
  }

 
}

