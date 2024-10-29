import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ds-itens-card',
  templateUrl: './itens-card.component.html',
  styleUrls: ['./itens-card.component.scss'],
})

export class ItensCardComponent implements OnInit {
  quantidades = {}
  objectEntries = Object.entries
  iconePadrao = "assets/deposita/images/li_file.svg"
  icones = {
    "Artigo": "assets/deposita/images/li_file.svg",
    "Conference": "assets/deposita/images/text-cursor.svg",
    "Livro": "assets/deposita/images/book.svg",
    "Capítulo de livro": "assets/deposita/images/bookmark.svg",
    "Trabalho de conclusão de curso": "assets/deposita/images/book.svg",
    "Tese": "assets/deposita/images/edit.svg",
    "Dissertação": "assets/deposita/images/quote.svg",
  }

  async getItensQtd(): Promise<any> {
    const tiposItens = ['article', 'conferenceObject', 'bookPart', 'masterThesis', 'book', 'doctoralThesis', 'bachelorThesis']

    const promises = tiposItens.map(tipo => {
      return fetch(environment.apiUrl + `/server/api/discover/facets/has_content_in_original_bundle?query=dc.type:${tipo}`).then(res => res.json());
    });
    const results = await Promise.all(promises);

    // Atualiza as variáveis com a quantidade de cada tipo de item
    results.forEach((result, index) => {
      const nomeDaColecao: string = tiposItens[index];
      this.quantidades[nomeDaColecao] = result._embedded.values[0]?.count ?? 0;
    });
  }

  redirect(tipo: string): void {
    window.location.href = '/search?query=dc.type:' + tipo;
  }

  ngOnInit(): void {
    this.getItensQtd();
  }
}
