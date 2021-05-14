import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { FilmesPage } from "../pages/filmes/filmes";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { GodzillaKongPage } from "../pages/filmes/godzilla-kong/godzilla-kong";
import { LigaJusticaPage } from "../pages/filmes/liga-justica/liga-justica";

@NgModule({
  declarations: [
    MyApp,
    FilmesPage,
    ContactPage,
    HomePage,
    TabsPage,
    GodzillaKongPage,
    LigaJusticaPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmesPage,
    ContactPage,
    HomePage,
    TabsPage,
    GodzillaKongPage,
    LigaJusticaPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
