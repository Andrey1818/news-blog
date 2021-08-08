import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostsService} from "../../../Shared/services/posts.service";
import {switchMap} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../Shared/interfaces/app.interfaces";
import {quillConfig} from "../../shared/interfeces/app.interfeces";
import {configQuill} from "../../shared/consts/quill-config.const";
import {CreateRefactorValidator} from "../../shared/validators/create-refactor.validator";
import {AlertService} from "../../shared/services/alert.service";

@Component({
  selector: 'app-admin-post-refactor',
  templateUrl: './admin-post-refactor.component.html',
  styleUrls: ['./admin-post-refactor.component.scss']
})
export class AdminPostRefactorComponent implements OnInit {

  configQuill: quillConfig = configQuill
  submitted = false
  post: Post
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postService.getPostByIdForRefactor(params.id)
      })
    ).subscribe((post: Post) => {
      this.post = post
      this.form = new FormGroup({
        title: new FormControl(post.title, [Validators.required, CreateRefactorValidator.noTrim]),
        text: new FormControl(post.text, [Validators.required, CreateRefactorValidator.noTrim])
      })
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    this.postService.refactor({
        ...this.post,
        title: this.form.value.title,
        text: this.form.value.text,
        date: new Date()
      }
    ).subscribe(() => {
      this.submitted = false
      this.alertService.warning("Пост был успешно отредактирован")
      this.router.navigate(['/admin/post-admin', this.post.id])
    })
  }
}
