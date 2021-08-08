import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateSearchService {

  statusSearch = 'start'
  search: string;
  backdrop = 'start'

  constructor() {
  }

  changeStatusSearch() {
    if (this.statusSearch === 'start') {
      this.backdrop = 'end'
      this.statusSearch = 'end'
      document.body.style.overflow = 'hidden'
    }
  }

  changeBackdrop() {
    setTimeout(() => this.backdrop = 'start', 1000)
    this.statusSearch = 'start'
    document.body.style.overflowY = 'scroll'
  }
}
