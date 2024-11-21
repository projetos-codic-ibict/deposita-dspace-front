import { Component } from '@angular/core';
import { listableObjectComponent } from '../../../../../object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../core/shared/view-mode.model';
import { ItemSearchResult } from '../../../../../object-collection/shared/item-search-result.model';
import { SearchResultListElementComponent } from '../../../search-result-list-element.component';
import { Item } from '../../../../../../core/shared/item.model';
import { getItemPageRoute } from '../../../../../../item-page/item-page-routing-paths';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement)
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement)
@Component({
  selector: 'ds-item-search-result-list-element',
  styleUrls: ['./item-search-result-list-element.component.scss'],
  templateUrl: './item-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item search result of the type Publication
 */
export class ItemSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;
  getBadgeClass(type: string): string {
    switch (type) {
      case 'Artigo de revista':
        return 'badge-primary'; // Azul
      case 'Trabalho de conclusão de curso':
        return 'badge-secondary'; // Cinza
      case 'Livro':
        return 'badge-success'; // Verde
      case 'Capítulo de livro':
        return 'badge-danger'; // Vermelho
      case 'Artigo de evento':
        return 'badge-warning'; // Amarelo
      case 'Tese':
        return 'badge-info'; // Azul claro
      case 'Dissertação':
        return 'badge-dark'; // Preto
      default:
        return 'badge-light'; // Branco
    }
  }
  

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.showThumbnails ?? this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
  }
}
