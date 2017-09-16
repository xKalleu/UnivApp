import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HorariosPage } from '../pages/horarios/horarios';
import { DisciplinasPage } from './../pages/disciplinas/disciplinas';
import { DisciplinaPage } from '../pages/disciplina/disciplina';
import { GeralPage } from '../pages/disciplina/geral/geral';
import { NotasPage } from '../pages/disciplina/notas/notas';
import { FaltasPage } from '../pages/disciplina/faltas/faltas';
import { ApsPage } from '../pages/disciplina/aps/aps';
import { NotaPage } from '../pages/disciplina/notas/nota/nota';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HorariosPage,
    DisciplinasPage,
    DisciplinaPage,
    GeralPage,
    NotasPage,
    FaltasPage,
    ApsPage,
    NotaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Voltar'
    }),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HorariosPage,
    DisciplinasPage,
    DisciplinaPage,
    GeralPage,
    NotasPage,
    FaltasPage,
    ApsPage,
    NotaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
