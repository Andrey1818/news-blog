import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {Subscription} from "rxjs";
import {AlertEnter, AlertLeave} from "../../../../Shared/animations/animate.consts";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [AlertEnter, AlertLeave]
})
export class AlertComponent implements OnInit, OnDestroy {

  stream: Subscription;
  delay = 4000;
  type = 'success';
  text: string;

  constructor(
    public alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.stream = this.alertService.alert$.subscribe(alert => {
      const timeOutInit = setTimeout(() => {
        this.type = alert.type
        this.text = alert.text
        clearTimeout(timeOutInit)
      }, 1000)

      const timeOutDestroy = setTimeout(() => {
        this.text = ''
        clearTimeout(timeOutDestroy)
      }, this.delay)
    })
  }

  ngOnDestroy() {
    if (this.stream) {
      this.stream.unsubscribe()
    }
  }

}
