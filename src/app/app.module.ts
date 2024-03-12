import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuModule } from 'primeng/menu';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

//traduccion con locale
import localeESUY from '@angular/common/locales/es-UY'
import localeESARG from '@angular/common/locales/es-AR'
import { registerLocaleData } from "@angular/common";

//debo registrar los idiomas que voy a usar
registerLocaleData(localeESUY)
registerLocaleData(localeESARG)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
    BrowserAnimationsModule
  ],
  providers: [
  //seteo por defecto el espaniol de uy
    { provide: LOCALE_ID, useValue: 'es-UY' },

    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
