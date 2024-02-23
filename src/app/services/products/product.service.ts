import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[]{
    return [
      {
        id:1,
        name: "Queijo azul",
        price: "R$23,00" ,
        description: "Queijo azul com mofo tipo Mutamiceto Série E. 200g",
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
          description: "Picolé de frutas de kiwi, morango, manga e uva. ",
          imageURL: '../../../assets/images/products-images/popsicle.png',
          }
          ,
        {
          id:5,
          name: "Ovos de ouro",
          price: "R$401.450,00" ,
          description: "Caixa com 25 ovos de ouro 24K. Direto do castelo do gigante.",
          imageURL: '../../../assets/images/products-images/eggs.png',
          }
          ,
        {
          id:6,
          name: "Mirtilos",
          price: "R$13,00" ,
          description: "200g de Mirtilos ",
          imageURL: '../../../assets/images/products-images/blueberries.png'
          }
          ,
        {
          id:7,
          name: "Mel",
          price: "R$18,00" ,
          description: "200g de mel florada de lavanda ",
          imageURL: '../../../assets/images/products-images/honey.png'
          }
          ,
        {
          id:8,
          name: "Ameixas",
          price: "R$10,00" ,
          description: "200g de Ameixas ",
          imageURL: '../../../assets/images/products-images/plums.png'
          }
          ,
        {
          id:9,
          name: "Café em grãos Norte de Minas",
          price: "R$15,00" ,
          description: "1kg de Café 100% arábica em grãos, torrado. ",
          imageURL: '../../../assets/images/products-images/coffee-beans.png'
          }
    ]
}
}
