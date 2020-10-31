import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements
  OnInit, OnDestroy,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
    title = 'Tsai-Ting,Yeh';

  @Input() host: string; // decorate the property with @Input()

  constructor() {
    console.log('constructor: ' + this.host);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck: ' + this.host);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: ' + this.host);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: ' + this.host);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ' + this.host);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ' + this.host);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy: ' + this.host);
  }

  ngOnInit(): void {
    console.log('ngOnInit: ' + this.host);
  }

  environment = 'MacOS';
  ide = 'VS Code';

}
