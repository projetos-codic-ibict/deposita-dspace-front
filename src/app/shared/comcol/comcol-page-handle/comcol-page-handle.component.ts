import { Component, Injectable, Input } from '@angular/core';

/**
 * This component builds a URL from the value of "handle"
 */

@Component({
  selector: 'ds-comcol-page-handle',
  styleUrls: ['./comcol-page-handle.component.scss'],
  templateUrl: './comcol-page-handle.component.html'
})

@Injectable()
export class ComcolPageHandleComponent {

  // Optional title
  @Input() title: string;

  // The value of "handle"
  @Input() content: string;

  public getHandle(): string {
    if (this.content && this.content.length > 0) {
      const parts = this.content.split('/');
      const collectionId = parts.length > 0 ? parts[parts.length - 1] : '';
      return `${window.location.protocol}//${window.location.host}/handle/deposita/${collectionId}`;
    }
    return '';
  }
}