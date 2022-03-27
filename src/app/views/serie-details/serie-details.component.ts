import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Serie } from '../../models/Serie';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css'],
})
export class SerieDetailsComponent implements OnInit {
  serie!: Serie;
  options: {};
  locales: string;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute
  ) {
    //values of parameters for date formating
    this.locales = this.serieService.locales;
    this.options = this.serieService.options;
  }

  ngOnInit(): void {
    //get Id from route
    const id = this.route.snapshot.params['id'];

    //get serie associated to the id
    this.serieService.getSerieById(+id).then((serie: Serie) => {
      this.serie = serie;
    });
  }
}
