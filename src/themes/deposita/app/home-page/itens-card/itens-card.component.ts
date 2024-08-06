import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ds-itens-card',
  templateUrl: './itens-card.component.html',
  styleUrls: ['./itens-card.component.scss'],
})

export class ItensCardComponent implements OnInit {
  artigo_revista_qtd = 0;
  artigo_conferencia_qtd = 0;
  livro_qtd = 0;
  capitulo_livro_qtd = 0;
  tcc_qtd = 0;
  tese_qtd = 0;
  dissertacao_qtd = 0;

  async getItensQtd(): Promise<any> {
    const tiposItens = ['Article', 'conference_object', 'book', 'book_part', 'Trabalho_de_conclusao_de_curso', 'thesis', 'Dissertação'];
    const promises = tiposItens.map(tipo => {
      return fetch(environment.apiUrl + `/server/api/discover/facets/has_content_in_original_bundle?query=dc.type:${tipo}`).then(res => res.json());
    });
    const results = await Promise.all(promises);
    // console.log(results[0]._embedded.values[0].count);

    // Atualiza as variáveis com a quantidade de cada tipo de item
    results.forEach((result, index) => {
      switch (tiposItens[index]) {
        case 'Article':
          this.artigo_revista_qtd = result._embedded.values[0].count;
          break;
        case 'conference_object':
          this.artigo_conferencia_qtd = result._embedded.values[0].count;
          break;
        case 'book':
          this.livro_qtd = result._embedded.values[0].count;
          break;
        case 'book_part':
          this.capitulo_livro_qtd = result._embedded.values[0].count;
          break;
        case 'Trabalho_de_conclusao_de_curso':
          this.tcc_qtd = result._embedded.values[0].count;
          break;
        case 'thesis':
          this.tese_qtd = result._embedded.values[0].count;
          break;
        case 'Dissertação':
          this.dissertacao_qtd = result._embedded.values[0].count;
          break;
      }
    });
  }

  redirect(tipo: string): void {
    window.location.href = '/search?query=dc.type:' + tipo;
  }

  ngOnInit(): void {
    this.getItensQtd();
  }
}
