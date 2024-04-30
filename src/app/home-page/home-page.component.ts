import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Site } from '../core/shared/site.model';
import { environment } from '../../environments/environment';
@Component({
  selector: 'ds-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  title: string;
  description: string;
  link: string;

  site$: Observable<Site>;
  recentSubmissionspageSize: number;
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.recentSubmissionspageSize = environment.homePage.recentSubmissions.pageSize;
  }

  async getRandomHighlight(): Promise<any> {
    const highlights = await fetch('http://192.168.1.20:9080/server/api/discover/browses/title/items?scope=7bc8d2d1-5e3a-495c-bfff-13e846fca9d5&sort=dc.title,ASC&page=0&size=20').then(res => res.json());
    console.log(highlights);
    return highlights;
  }

  ngOnInit(): void {
    this.site$ = this.route.data.pipe(
      map((data) => data.site as Site),
    );

    void this.getRandomHighlight().then(response => {
      const randomItem = Math.floor(Math.random() * response._embedded.items.length);
      this.link = '/items/' + response._embedded.items[randomItem].id;
      this.title = response._embedded.items[randomItem].name;
      const fullDescription = response._embedded.items[randomItem].metadata['dc.description.resumo'][0].value;
      this.description = fullDescription.length > 200 ? fullDescription.substring(0, 200) + '...' : fullDescription;
      this.cdr.detectChanges();
    });
  }
}
