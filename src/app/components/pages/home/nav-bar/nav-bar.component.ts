import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/products/product.service';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {
  products:Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}
