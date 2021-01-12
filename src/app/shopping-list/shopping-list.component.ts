import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getShoppingList();
    this.slService.ingredientChange.subscribe((ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    });
  }
  onAddShoppingList(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
  }
}
