import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: ` <p>contact works!</p> `,
  styleUrl: './contact.component.css',
})
export class ContactComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit
{
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfter Content init');
  }
  ngDoCheck(): void {
    console.log('ng Do Changes');
  }
  ngOnInit(): void {
    console.log('ng on it');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng On Changes');
  }
}
