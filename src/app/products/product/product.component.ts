import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @ViewChild('details') details: ElementRef;
  // @ViewChild('option') option: ElementRef;
  @ContentChild ('option') option: ElementRef;

  selectedCount = 0;
  selectedOptions: string[] = ['Hola'];

  maxCount = 4;

  names = [
    { CategoryID: 1,  CategoryName: "Beverages", Description: "Coffees, teas" },
    { CategoryID: 2,  CategoryName: "Condiments", Description: "Sweet and savory sauces" },
    { CategoryID: 3,  CategoryName: "Confections", Description: "Desserts and candies" },
    { CategoryID: 4,  CategoryName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
    { CategoryID: 5,  CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
    { CategoryID: 6,  CategoryName: "Beverages", Description: "Beers, and ales" },
    { CategoryID: 7,  CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
    { CategoryID: 8,  CategoryName: "Confections", Description: "Sweet breads" },
    { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
    { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
   ];


  ngOnInit() {
    console.log(this.details);
    console.log(this.option);
  }
  updateSelectedCount(count: number) {
    this.selectedCount = count;
    if (count === this.maxCount) {
      alert('You have maxed out!');
    }
  }

  onNgModelChange(event) {
    console.log('on ng model change', event);
  }

}
