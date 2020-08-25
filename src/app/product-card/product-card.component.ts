import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { Shoppingcart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product:Product;
  @Input('show-actions') showActions=true;
 @Input('shopping-cart')shoppingCart:Shoppingcart;

  constructor(private CartService:ShoppingCartService) { }

  addToCart()
  {
    this.CartService.addToCart(this.product);
  }

}
