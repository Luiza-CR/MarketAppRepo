import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products:String[] = [];

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.products = this.ProductService.getAll();
  }

}
