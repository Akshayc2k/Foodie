import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  foodDetails=[
    {
      id:1,
      foodName:'Paneer Masala',
      foodDetails:"Paneer-fried masala paneer",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:2,
      foodName:'Pizza',
      foodDetails:"Hawaiian Chicken PizzaSmoked",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80"
    },
    {
      id:3,
      foodName:'Noodles',
      foodDetails:"spaghetti bolognese with tomato cherry",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1626844131082-256783844137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    },
    {
      id:4,
      foodName:'Burger',
      foodDetails:"Eggs Benedict Burger",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=422&q=80"
    },
    {
      id:5,
      foodName:'Chiken',
      foodDetails:"Roast Chiken",
      foodPrice:200,
      foodImg:"https://plus.unsplash.com/premium_photo-1663840345068-6a1032b26742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      id:6,
      foodName:'Biryani',
      foodDetails:"Haydrabadi Biryani",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
  ]
}
