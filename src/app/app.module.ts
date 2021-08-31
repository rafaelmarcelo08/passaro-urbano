import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {
  LOCALE_ID,
  NgModule
} from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { ROUTES } from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DescricaoReduzida } from './util/descricao-reduzia.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    OndeFicaComponent,
    ComoUsarComponent,
    DescricaoReduzida,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-Br'
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
