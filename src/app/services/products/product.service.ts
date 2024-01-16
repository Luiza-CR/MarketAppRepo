import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():String[]{
    return [
      'assets/images/products-images/bacon-rolls.png',
      'assets/images/products-images/blue-cheese.png',
      'assets/images/products-images/blueberries.png',
      'assets/images/products-images/champagne.png',
      'assets/images/products-images/cheese.png',
      'assets/images/products-images/chia-seeds.png',
      'assets/images/products-images/cucumbers.png',
      'assets/images/products-images/dragon-fruit.png',
      'assets/images/products-images/bacon-rolls.png',
      'assets/images/products-images/eggs.png',
      'assets/images/products-images/golden-eggs.png',
      'assets/images/products-images/lettuce.png',
      'assets/images/products-images/meat.png',
      'assets/images/products-images/pears.png',
      'assets/images/products-images/pile-of-bagels.png',
      'assets/images/products-images/pile-of-sunflow-seeds.png',
      'assets/images/products-images/plums.png',
      'assets/images/products-images/porkchops.png',
      'assets/images/products-images/potatoes.png',
      'assets/images/products-images/soda.png',
      'assets/images/products-images/tomatoes.png',
      'assets/images/products-images/martini-beverage.png',

      'assets/images/misc-images/antimissile-rocket-launcher.png',
      'assets/images/misc-images/anvil.png',
      'assets/images/misc-images/beehive.png',
      'assets/images/misc-images/ladder.png',
      'assets/images/misc-images/romantic-basket.png',
      'assets/images/misc-images/thor-hammer.png'
    ]
}
}
