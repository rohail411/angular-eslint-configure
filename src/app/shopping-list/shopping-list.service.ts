import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChange = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 3),
    new Ingredient('Rice', 5),
  ];
  getShoppingList() {
    return this.ingredients.slice();
  }
  onAddToShoppingList(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }
  onAddIngreedientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChange.emit(this.ingredients.slice());
  }
}
