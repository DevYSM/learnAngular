import { Component, Input, Output,EventEmitter } from '@angular/core';
 
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  
  @Input('isFavorite') isChecked: boolean = false;
  @Output() change = new EventEmitter()

  onFavoriteClick() {
    this.isChecked = !this.isChecked;
    this.change.emit();
    console.log(this.isChecked);
  }
}
