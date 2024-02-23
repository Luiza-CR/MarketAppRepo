import { Component, Input, OnInit } from '@angular/core';
import { Product as Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {

  @Input()
  product!: Product;
}
