import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>

    <a [href]="url">Click Me</a>

    <input (ngModelChange)="onChangeEvent($event)" />
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  url: any;

  onChangeEvent(event) {
    console.log(event);
  }
}
