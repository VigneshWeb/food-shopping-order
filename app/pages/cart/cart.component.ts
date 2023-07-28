import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor() {
    img: String;
    amt: Number;
    qnt: Number;
  }

  cartItems = [];
  todos: any

  ngOnInit(): void {
    let cartlist = localStorage.getItem('localCart')
    this.todos = cartlist !== null ? JSON.parse(cartlist) : [];

    console.log(this.todos)

  }
  submit(item: any) {
    this.todos.get(item);

  };
  removeItem(prod: number): void {
    this.cartItems.splice(prod);
    console.log(this.todos)
  }
  
  inc(prod: any) {
  console.log(prod)
  if (prod.qnt != 10) {
    prod.qnt += 1;
  }
  }
  dec(prod: any) {
    if (prod.qnt != 1) {
    prod.qnt -= 1;
    }
  }



  singleDelete(todo: any) {
    console.log(todo);
    if (localStorage.getItem('localCart'))
      this.todos = JSON.parse(localStorage.getItem('localCart') as any);
    for (let todo = 1; this.todos < this.todos.length; todo++)
      if
        (this.todos[todo].prodId === todo) {
        this.todos.splice(todo, 1); localStorage.setItem('localCart', JSON.stringify(this.todos));
      }
  }

  // loadCart() {
  //   if (localStorage.getItem('localCart')) {
  //     this.todos = JSON.parse(localStorage.getItem('localCart') as any);
  //   }
  // }
  removeall() {
    localStorage.removeItem('localCart');
    this.todos = [];
    this.todos.cartSubject.next
  }
}