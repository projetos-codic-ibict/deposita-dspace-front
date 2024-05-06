import { Component, OnInit } from '@angular/core';

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
    const tiposItens = ['Artigos_de_revistas', 'Artigos_de_Conferencias', 'Livros', 'Capitulos_de_Livros', 'TCCs', 'Teses', 'Dissertacoes'];
    const promises = tiposItens.map(tipo => {
      return fetch(`http://192.168.1.22:9080/server/api/discover/facets/has_content_in_original_bundle?query=${tipo}`).then(res => res.json());
    });
    const results = await Promise.all(promises);
    console.log(results[0]._embedded.values[0].count);

    // Atualiza as variáveis com a quantidade de cada tipo de item
    results.forEach((result, index) => {
      switch (tiposItens[index]) {
        case 'Artigos_de_revistas':
          this.artigo_revista_qtd = result._embedded.values[0].count;
          break;
        case 'Artigos_de_Conferencias':
          this.artigo_conferencia_qtd = result._embedded.values[0].count;
          break;
        case 'Livros':
          this.livro_qtd = result._embedded.values[0].count;
          break;
        case 'Capitulos_de_Livros':
          this.capitulo_livro_qtd = result._embedded.values[0].count;
          break;
        case 'TCCs':
          this.tcc_qtd = result._embedded.values[0].count;
          break;
        case 'Teses':
          this.tese_qtd = result._embedded.values[0].count;
          break;
        case 'Dissertacoes':
          this.dissertacao_qtd = result._embedded.values[0].count;
          break;
      }
    });
  }

  ngOnInit(): void {
    this.getItensQtd();
  }
}
