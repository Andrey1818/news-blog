import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthVisibilityService {

  authError: boolean;
  errorMessage: string;
  errorMessageOnHome: string;


  errorTextMessage(errorCode:string){
      switch (errorCode) {
        case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
          this.errorMessage = 'Количество попыток привышено'
          break;

        case 'INVALID_PASSWORD':
          this.errorMessage ='Неверный пароль'
          break;

        case "EMAIL_NOT_FOUND":
          this.errorMessage = 'Неверный Email'
          break;
      }
  }
}
