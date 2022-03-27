import { Component, OnInit } from '@angular/core';
import { SerieService } from '../../services/serie/serie.service';
import { Router } from '@angular/router';
import { Serie } from '../../models/Serie';

@Component({
  selector: 'app-serie-new',
  templateUrl: './serie-new.component.html',
  styleUrls: ['./serie-new.component.css'],
})
export class SerieNewComponent implements OnInit {
  constructor(private serieService: SerieService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitNewSerie(serieToAdd: Serie): void {
    this.serieService.addSerie(serieToAdd).then(() => {
      // sends back to the series list view
      this.router.navigateByUrl('/series');
    });
  }
}
