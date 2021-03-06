import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName') ingName: ElementRef;
  @ViewChild('ingAmount') ingAmount: ElementRef;
  @Output() onAddIngredientOutput = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddIngredient() {
    const name = this.ingName.nativeElement.value;
    const amount = this.ingAmount.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.slService.onAddToShoppingList(newIngredient);
  }
}
