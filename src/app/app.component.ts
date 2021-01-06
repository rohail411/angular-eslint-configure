import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  feature = 'recipe';
  onNavigationChange(feature: string) {
    this.feature = feature;
  }
}
