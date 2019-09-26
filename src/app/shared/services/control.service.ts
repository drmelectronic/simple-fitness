import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {ControlItem} from '../../modules/control/control.interface';
import {User} from '../../modules/user/user';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ControlService {

  userId$: BehaviorSubject<string>;

  controles$: Observable<ControlItem[]>;

  constructor(public afs: AngularFirestore) {
    this.userId$ = new BehaviorSubject<string>('1')
    this.controles$ = this.userId$.pipe(
      switchMap(uid => this.afs
        .collection<ControlItem>('/users/' + uid + '/controles')
        .valueChanges(),
      ),
    );
  }

  setUser(user: User) {
    console.log('user setted', user);
    this.userId$.next(user.uid);
  }

  addControl(control: ControlItem) {
    console.log('addControl: ' + '/users/' + this.userId$.getValue() + '/controles');
    const controlesRef = this.afs.collection('/users/' + this.userId$.getValue() + '/controles');
    controlesRef.doc('control').set(control).then(response => {
      console.log('success');
      console.log(response);
    }).catch(reason => {
      console.log('error');
      console.log(reason);
    });
  }

  getControles() {
    return this.controles$;
  }
}
