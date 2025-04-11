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
    const typeMap: { [key: string]: string } = {
        'Artigo de revista': 'badge-primary',
        'Artigo': 'badge-primary',
        'article': 'badge-primary',
        'Trabalho de conclusão de curso': 'badge-secondary',
        'bachelorThesis': 'badge-secondary',
        'Livro': 'badge-success',
        'book': 'badge-success',
        'Capítulo de livro': 'badge-danger',
        'bookChapter': 'badge-danger',
        'Artigo de evento': 'badge-warning',
        'conferenceObject': 'badge-warning',
        'Tese': 'badge-info',
        'doctoralThesis': 'badge-info',
        'Dissertação': 'badge-dark',
        'masterThesis': 'badge-dark',
    };

    return typeMap[type] || 'badge-light';
}

  

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.showThumbnails ?? this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
  }
}
