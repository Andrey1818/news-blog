import {FormControl} from "@angular/forms";

export class AuthValidator {

  static noSpaces(control: FormControl): { [key: string]: boolean } | null {
    if (control.value) {

      const controlArray = control.value.split('')

      const symbolArr: Array<string> = ['*', ' ', '/', '@', '(', '&', "'",
        '"', ':', '>', '<', '=', '-', '@'
        , '^', ')', '{', '}', '[', ']', '!', '.', ',', '&', '$', '#', '№', '?', '%', '`', '~', '₴', '_'];

      function symbolIterate() {
        for (let symbol of symbolArr) {
          if (controlArray.includes(symbol)) {
            return {validateSymbol: true}
          }
        }
        return null
      }

      return (symbolIterate())
    }
    return null
  }
}
