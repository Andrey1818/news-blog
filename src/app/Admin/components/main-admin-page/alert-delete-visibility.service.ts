import {Injectable} from "@angular/core";

@Injectable()
export class AlertDeleteVisibilityService {

  deleteWindow = false

  alertDelete() {
    if (!this.deleteWindow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
    this.deleteWindow = !this.deleteWindow
  }
}
