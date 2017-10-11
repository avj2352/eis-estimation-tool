import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Enterprise Integrated Solutions<b>
    <a href="http://INGBTCPIC5DTR98:8080/EIS_Portal" target="_blank">EIS SD Tool</a>
    </b>2017</span>    
  `,
})
export class FooterComponent {
}
