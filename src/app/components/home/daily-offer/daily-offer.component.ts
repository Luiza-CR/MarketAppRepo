import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../services/products/product.service';
import { Products } from '../../../shared/models/products';

@Component({
  selector: 'app-daily-offer',
  templateUrl: './daily-offer.component.html',
  styleUrl: './daily-offer.component.css'
})

export class DailyOfferComponent implements OnInit{

  products:Products[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

}
