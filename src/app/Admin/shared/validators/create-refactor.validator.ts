import {FormControl} from "@angular/forms";


export class CreateRefactorValidator {
  static noTrim(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && !control.value.trim() && control.dirty) {
      return {noTrim: true}
    }
    return null
  }
}
