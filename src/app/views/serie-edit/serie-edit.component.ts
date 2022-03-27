import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../../services/serie/serie.service';
import { Serie } from '../../models/Serie';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css'],
})
export class SerieEditComponent implements OnInit {
  serie!: Serie;

  constructor(
    private serieService: SerieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //get Id from route
    const id = this.route.snapshot.params['id'];

    this.serieService.getSerieById(+id).then((serie: Serie) => {
      this.serie = serie;
    });
  }

  onSubmitEditSerie(serieToEdit: Serie): void {
    this.serieService.editSerie(serieToEdit).then(() => {
      this.router.navigateByUrl('/series');
    });
  }
}
