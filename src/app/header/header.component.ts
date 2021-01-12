import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() headerNav = new EventEmitter<string>();
  activeFeature = 'recipe';
  isOpen = false;
  onNavChange(itemName: string) {
    this.headerNav.emit(itemName);
    this.activeFeature = itemName;
  }
  toggleMenu(){
    this.isOpen = !this.isOpen;
  }
}
