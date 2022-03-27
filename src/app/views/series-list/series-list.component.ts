import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../services/serie/serie.service';
import { Serie } from '../../models/Serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  series!: Serie[];
  options: {};
  locales: string;

  constructor(private serieService: SerieService) {
    this.locales = this.serieService.locales;
    this.options = this.serieService.options;
  }

  ngOnInit(): void {
    this.series = this.serieService.series;
  }

  onClickDeleteSerie(index: number): void {
    this.serieService.deleteSerie(this.series[index].id).then(() => {});
  }
}
