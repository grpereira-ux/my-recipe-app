import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Condensed Milk', 3),
    new Ingredient('Condensed Milk', 3),
    new Ingredient('Condensed Milk', 3)
  ];

  constructor() { }

  ngOnInit () {
  }
}
