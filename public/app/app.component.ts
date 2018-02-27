import { Component } from '@angular/core';

@Component({ 
  selector: 'app-tag', // custom html tag which can be used in the html page
  template: ` <div>
  <h1>{{appTitle}}</h1>
  <div>To Tutorials Point</div>
</div> `,
})
export class AppComponent {
  appTitle: string = 'Welcome';
}