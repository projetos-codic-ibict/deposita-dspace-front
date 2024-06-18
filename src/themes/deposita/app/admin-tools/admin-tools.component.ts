import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ds-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.scss']
})
export class AdminToolsComponent {
  @Input() itemId: string;

  constructor(private router: Router) { }

  edit() {
    // Lógica para editar
    void this.router.navigate([`/items/${this.itemId}/edit/metadata`]);
  }

  exportItem() {
    // Lógica para exportar item
  }

  migrateItem() {
    // Lógica para migrar item
  }

  exportMetadata() {
    // Lógica para exportar metadados
  }
}
