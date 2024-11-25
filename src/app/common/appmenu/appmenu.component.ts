import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css',
})
export class AppmenuComponent implements DoCheck {
  showMenu = true;
  constructor(private router: Router) {}
  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if (currentUrl === '/login' || currentUrl === '/register') {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }
}
