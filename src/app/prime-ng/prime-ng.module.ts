import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from "primeng/panel";
//Lo uso simplemente para exportar todo lo que voy a usar de ngPrime para no tener todo junto en app.ts
@NgModule({
  exports: [
    // MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
