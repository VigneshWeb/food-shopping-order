import { Component, OnInit,} from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    img: String;
    amt: Number;
    qnt: Number;
  }

  todos: any = []

  ngOnInit(): void {

    let cartlist = localStorage.getItem('localCart')
    
    this.todos = cartlist !== null ? JSON.parse(cartlist) : [];
    console.log(cartlist)
    for(let todo=1 ;todo<this.productArray.length;todo++)
    {
      let item=this.todos[todo];
      let cartlist=item.prodId;
      if (this.productArray[todo].prodId==cartlist){
        this.productArray[todo]=item;
      }
    }
  }
  
  productArray = [
    {
      prodId: 1,
      img: "assets/img/specials1.png",
      amt: 300,
      qnt: 1
    }, {
      prodId: 2,
      img: "assets/img/specials2.png",
      amt: 200,
      qnt: 1
    }, {
      prodId: 3,
      img: "assets/img/specials3.png",
      amt: 300,
      qnt: 1
    }, {
      prodId: 4,
      img: "assets/img/specials4.png",
      amt: 100,
      qnt: 1
    }, 

  ];
  inc(prod: any) {
    console.log(prod)
    if (prod.qnt != 5) {
      prod.qnt += 1;
    }
    // this.setmenuitemsel(prod)
  }
  dec(prod: any) {
    if (prod.qnt != 1) {
      prod.qnt -= 1;
    }
    // this.setmenuitemsel(prod)
  }
  setmenuitemsel(item: any) {
    console.log (item);
    this.todos.push(item);
    localStorage.setItem('localCart', JSON.stringify(this.todos));


    // if (localStorage.getItem('localCart'))
    //   this.todos = JSON.parse(localStorage.getItem('localCart') as any);
    for (let todos = 0; todos < this.todos.length; todos++)
      if(this.todos[todos].prodId === todos) {
        this.todos.splice(todos, 2); localStorage.setItem('localCart', JSON.stringify(this.todos));
      }
  }
}

