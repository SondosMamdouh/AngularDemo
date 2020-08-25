import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { Shoppingcart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[];
  filterdProducts:Product[]=[];
  category: string;
cart$:Observable<Shoppingcart>;

  constructor(
    private route:ActivatedRoute,
   private productService:ProductService,
    private shoppingCartServis:ShoppingCartService) { 
    
  
   

   
  }
  
  async ngOnInit() {
    this.cart$=await this.shoppingCartServis.getCart();
    this.populateProducts();
  }

  private populateProducts(){
    this.productService
    .getAll()
    .switchMap(products=>{
    this.products=products;
    return this.route.queryParamMap;
  })
   .subscribe(params=>{
      this.category=params.get('category');
      this.applayFilter();
    });
  }
  private applayFilter(){
    
    this.filterdProducts=(this.category)?
    this.products.filter(p=>p.category === this.category):
    this.products;
  }
}
