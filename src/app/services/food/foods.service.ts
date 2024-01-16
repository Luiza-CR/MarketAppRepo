import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() { }

  getAll():String[]{
    return [
      'assets/images/foods-images/bacon-rolls.png',
      'assets/images/foods-images/blue-cheese.png',
      'assets/images/foods-images/blueberries.png',
      'assets/images/foods-images/champagne.png',
      'assets/images/foods-images/cheese.png',
      'assets/images/foods-images/chia-seeds.png',
      'assets/images/foods-images/cucumbers.png',
      'assets/images/foods-images/dragon-fruit.png',
      'assets/images/foods-images/bacon-rolls.png',
      'assets/images/foods-images/eggs.png',
      'assets/images/foods-images/golden-eggs.png',
      'assets/images/foods-images/lettuce.png',
      'assets/images/foods-images/meat.png',
      'assets/images/foods-images/pears.png',
      'assets/images/foods-images/pile-of-bagels.png',
      'assets/images/foods-images/pile-of-sunflower-seeds.png',
      'assets/images/foods-images/plums.png',
      'assets/images/foods-images/porkchops.png',
      'assets/images/foods-images/potatoes.png',
      'assets/images/foods-images/soda.png',
      'assets/images/foods-images/tomatoes.png',
      'assets/images/foods-images/martini-beverage.png',

      'assets/images/misc-images/antimissile-rocket-launcher.png',
      'assets/images/misc-images/anvil.png',
      'assets/images/misc-images/beehive.png',
      'assets/images/misc-images/romantic-basket.png',
      'assets/images/misc-images/thor-hammer.png'
    ]
  }
}
