import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ds-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss']
})
export class HorizontalNavComponent {
  @Input() itemId: string;
  itemLink: string;

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  register() {
    void this.router.navigate([this.router.url]);
  }

  statistics() {
    void this.router.navigate([`/statistics/items/${this.itemId}`]);
  }

  edit() {
    void this.router.navigate([`/items/${this.itemId}/edit/metadata`]);
  }
}
