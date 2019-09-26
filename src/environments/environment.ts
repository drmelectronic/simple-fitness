// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDAB5T5DTYZzgN7BLTGzyoPDkLKwEcXG_k',
    authDomain: 'simple-fitness-b03fe.firebaseapp.com',
    databaseURL: 'https://simple-fitness-b03fe.firebaseio.com',
    projectId: 'simple-fitness-b03fe',
    storageBucket: '',
    messagingSenderId: '585204758256',
    appId: '1:585204758256:web:dabc4b739c422b3c5cf435'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//   match /users/{userId} {
//     allow write, read: if isOwner(userId);
//   }
//   function isOwner(userId) {
//     return request.auth.uid == userId
//   }
// }
// }

// Allow read/write access to all users under any conditions
// Warning: **NEVER** use this rule set in production; it allows
// anyone to overwrite your entire database.
// service cloud.firestore {
//   match /databases/{database}/documents {
//   match /{document=**} {
//     allow read, write: if true;
//   }
// }
// }

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//   match /users/{userId} {
//     allow write, read: if isOwner(userId);
//
//     match /controles {
//       allow write, read: if isOwner(userId);
//     }
//   }
// }
// function isOwner(userId) {
//   return request.auth.uid == userId
// }
// }
