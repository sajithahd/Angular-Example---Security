import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <div>
      <input [ngModel]="name" (ngModelChange)="onChangeEvent($event)" />
    </div>

    <div>
      untrsuted URL
      <a [href]="url">Click Me</a>
    </div>

    <div>
      trusted URL
      <a [href]="trustedUrl">Click Me</a>
    </div>
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
  trustedUrl: any;

  constructor(private sanitizer: DomSanitizer) {}

  onChangeEvent(event) {
    this.url = "javascript:alert('" + event + "')";
    console.log(this.url);

    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.url);
  }
}
