import { Injectable } from '@angular/core';
import { Products } from '../../shared/models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Products[]{
    return [
      {
        id:1,
        name: "Queijo azul",
        price: "R$23,00" ,
        description: "Queijo azul com mofo T-vírus. 200g",
        imageURL: '../../../assets/images/products-images/blue-cheese.png',
      },
      {
        id:2,
        name: "Queijo suíço",
        price: "R$23,00" ,
        description: "Queijo suíço 200g",
        imageURL: '../../../assets/images/products-images/cheese.png',
      },
      {
        id:3,
        name: "Tomate",
        price: "R$3,00" ,
        description: "Tomates. R$ 3,00 o KG",
        imageURL: '../../../assets/images/products-images/tomatoes1.png',
        }
        ,
        {
          id:4,
          name: "Picolé de frutas",
          price: "R$3,00" ,
          description: "Picolé de frutas. Contém: kiwi, morango, manga e uva ",
          imageURL: '../../../assets/images/products-images/popsicle.png',
          }
          ,
        {
          id:5,
          name: "Ovos de ouro",
          price: "R$1.000.000,00" ,
          description: "Caixa com 25 ovos de ouro 24K. Direto do castelo do gigante.",
          imageURL: '../../../assets/images/products-images/eggs.png',
          }
          ,
        {
          id:6,
          name: "Mirtilos",
          price: "R$13,00" ,
          description: "200g de Mirtilos ",
          imageURL: '../../../assets/images/products-images/blueberries.png',
          }



    ]
}
}
