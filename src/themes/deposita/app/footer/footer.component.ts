import { Component } from '@angular/core';
import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';

@Component({
  selector: 'ds-footer',
  // styleUrls: ['footer.component.scss'],
  styleUrls: ['./footer.component.scss'],
  // templateUrl: 'footer.component.html'
  templateUrl: './footer.component.html'
})
export class FooterComponent extends BaseComponent {
}
