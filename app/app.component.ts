import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <oso-comment></oso-comment>
    `,
})
export class AppComponent  {
  title = 'Open Source Opinions';
}
