import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serie } from '../../models/Serie';
import { Comm } from '../../models/Comm';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css'],
})
export class SerieFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Serie>;
  @Input() buttonLabel!: string;
  @Input() serieToEdit!: Serie;

  form!: FormGroup;
  serie!: Serie;
  comment: Comm[];

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Serie>();
    this.comment = [];
  }

  ngOnInit(): void {
    // gotta keep it clean
    this.initForm();
  }

  onSubmitSerieForm(): void {
    // No submit if all validators are not satisfied
    if (this.form.valid) {
      this.formSubmitted.emit(this.serie);
    }
  }

  //Parsing of the date to give the right format to the toLocaleDateString() method in the view
  onChangeDateRelease(dateSeasonString: string) {
    this.serie.releaseDate = new Date(Date.parse(dateSeasonString));
  }

  private initForm(): void {
    //if the serie is new create it otherwise edit it
    this.serie = this.serieToEdit
      ? this.serieToEdit
      : new Serie(0, '', new Date(), 0, '', '', '', this.comment);

    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      releaseDate: [null, [Validators.required]],
      numberOfSeasons: [null, [Validators.required, Validators.min(1)]],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
      review: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
      photo: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(300),
        ],
      ],
    });
  }
}
