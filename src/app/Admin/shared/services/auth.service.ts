import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfeces/app.interfeces";
import {tap} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }


  get token(): any {
    if (new Date() > new Date(<string>localStorage.getItem('fb-token-exp'))) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<void> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`
      , user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated() {
    return !!this.token
  }

  private setToken(response: Observable<any> | any) {

    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
