import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/products/product.service';
import { Products } from '../../shared/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products:Products[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

}
