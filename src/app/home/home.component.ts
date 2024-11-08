import { Component } from '@angular/core';
import { ReversePipe } from '../custom/reverse.pipe';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Hello Angular 18';
  subtitle = 'Basic for beginners';
  todayDate = new Date();
  salary = 1200;
  _obj = { name: 'NT' };

  _class = 'inactive';
  isDisabled = true;
  ChangeTitle() {
    this.title = 'Angular 18 updated';
  }
  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
