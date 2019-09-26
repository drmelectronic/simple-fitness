import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {first, map, switchMap} from 'rxjs/operators';
import {auth} from 'firebase/app';
import {User} from '../../modules/user/user';
import {isNullOrUndefined} from 'util';
import {Observable, of} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {ControlItem} from '../../modules/control/control.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>('users/${user.uid}').valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  registerUser() {

  }

  async googleSignin() {
    const credential = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['/']);
    this.updateUserData(credential.user);
  }

  async signOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User {
      const userString = localStorage.getItem('currentUser');
      if ( !isNullOrUndefined(userString)) {
        const user: User = JSON.parse(userString);
        return user;
      } else {
        return null;
      }
  }

  private updateUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc('users/' + user.uid);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, {merge: true});
  }

  getUser(): Promise<any> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
