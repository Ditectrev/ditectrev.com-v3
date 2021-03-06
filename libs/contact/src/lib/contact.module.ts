// TODO: Should be Firebase-related modules a separated module?
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ContactComponent } from './contact/contact.component';
import { environment } from '@apps/ditectrev/src/environments/environment';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgModule } from '@angular/core';
import {
  RecaptchaFormsModule,
  RecaptchaModule,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // TODO: Check offline support, i.e., enablePersistence(), see https://github.com/angular/angularfire/blob/master/docs/firestore/offline-data.md
    AngularFireStorageModule,
    MaterialFileInputModule,
    Ng2TelInputModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
    SharedModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: String(process.env.RECAPTCHA_API_KEY),
      } as RecaptchaSettings,
    },
  ],
})
export class ContactModule {}
