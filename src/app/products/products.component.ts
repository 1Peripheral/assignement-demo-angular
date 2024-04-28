import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public products : any;
  public keyword: string = "";

  constructor() {
  }

  ngOnInit() {
    this.products = [
      {"id": 1, "name": "Computer", "price": 4000},
      {"id": 2, "name": "Printer", "price": 300},
      {"id": 3, "name": "Smartphone", "price": 1000},
      {"id": 4, "name": "Mouse", "price": 100},
    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }

  searchProduct(): void {
    this.products = this.products.filter(
      (p: any) => p.name
        .toLowerCase()
        .includes(this.keyword)
    );
  }
}
