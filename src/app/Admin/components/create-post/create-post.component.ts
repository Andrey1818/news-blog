import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../Shared/interfaces/app.interfaces";
import {PostsService} from "../../../Shared/services/posts.service";
import {configQuill} from "../../shared/consts/quill-config.const";
import {quillConfig} from "../../shared/interfeces/app.interfeces";
import {Router} from "@angular/router";
import {CreateRefactorValidator} from "../../shared/validators/create-refactor.validator";
import {AlertService} from "../../shared/services/alert.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  configQuill: quillConfig = configQuill
  form: FormGroup

  constructor(
    private postsService: PostsService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
        image: new FormControl(null, [Validators.required, CreateRefactorValidator.noTrim]),
        title: new FormControl(null, [
          Validators.required,
          CreateRefactorValidator.noTrim,
          Validators.maxLength(38)
        ]),
        text: new FormControl(null, [Validators.required, CreateRefactorValidator.noTrim]),
      }
    )

  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      image: this.form.value.image,
      title: this.form.value.title,
      text: this.form.value.text,
      date: new Date()
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset()
      this.alertService.success("Пост был успешно создан")
      this.router.navigate(['/admin/main'])
    })
  }
}
