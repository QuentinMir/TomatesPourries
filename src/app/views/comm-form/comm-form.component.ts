import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comm } from 'src/app/models/Comm';
import { SerieService } from '../../services/serie/serie.service';

@Component({
  selector: 'app-comm-form',
  templateUrl: './comm-form.component.html',
  styleUrls: ['./comm-form.component.css'],
})
export class CommFormComponent implements OnInit {
  comment!: Comm;
  form!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private serieService: SerieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    // getting id from the serie
    this.id = this.route.snapshot.params['id'];
  }

  onSubmitCommentForm(): void {
    //securing form
    if (this.form.valid) {
      this.serieService.addComment(this.comment, +this.id - 1).then(() => {
        //send the user back to the detail serie after success
        this.router.navigate(['/series', this.id]);
      });
    }
  }

  private initForm(): void {
    this.comment = new Comm(0, new Date(), '', '');
    this.form = this.fb.group({
      author: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      content: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(300),
        ],
      ],
    });
  }
}
