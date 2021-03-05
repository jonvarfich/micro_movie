// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
  apiKey: "b7efb9ef15419744277f81e00d5458ad",
  authDomain: "micro-movie.firebaseapp.com",
  databaseURL: "https://micro-movie-default-rtdb.firebaseio.com/",
  projectId: "micro-movie",
  storageBucket: "gs://micro-movie.appspot.com",
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
