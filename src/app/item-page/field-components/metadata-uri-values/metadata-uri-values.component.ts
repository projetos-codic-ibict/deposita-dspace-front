import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MetadataValuesComponent } from '../metadata-values/metadata-values.component';
import { MetadataValue } from '../../../core/shared/metadata.models';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component as a link.
 * It puts the given 'separator' between each two values
 * and creates an 'a' tag for each value,
 * using the 'linktext' as it's value (if it exists)
 * and using the values as the 'href' attribute (and as value of the tag when no 'linktext' is defined)
 */
@Component({
  selector: 'ds-metadata-uri-values',
  styleUrls: ['./metadata-uri-values.component.scss'],
  templateUrl: './metadata-uri-values.component.html'
})
export class MetadataUriValuesComponent extends MetadataValuesComponent implements OnInit {

  handleURI: string;
  /**
   * Optional text to replace the links with
   * If undefined, the metadata value (uri) is displayed
   */
  @Input() linktext: any;

  /**
   * The metadata values to display
   */
  @Input() mdValues: MetadataValue[];

  /**
   * The seperator used to split the metadata values (can contain HTML)
   */
  @Input() separator: string;

  /**
   * The label for this iteration of metadata values
   */
  @Input() label: string;




  ngOnInit(): void {

    // Verifica se mdValues está definido e possui pelo menos um valor
    const baseUrl = `${window.location.protocol}//${window.location.host}`;

    // Verifica se mdValues está definido e possui pelo menos um valor
    if (this.mdValues && this.mdValues.length > 0) {
      // Extrair o itemId do value atual
      const itemId = this.extractItemId(this.mdValues[0].value);

      // Modificar o valor com a base da URL e o ID extraído
      this.handleURI = `${baseUrl}/handle/deposita/${itemId}`;
    }
  }

  // Função para extrair o ID da string de value
  extractItemId(url: string): string {
    // Pegamos o último valor após a última barra "/"
    return url.substring(url.lastIndexOf('/') + 1);
  }

}
