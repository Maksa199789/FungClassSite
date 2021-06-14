import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { FUNGUSComponent } from './fungus/fungus.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { GljivaOPISComponent } from './gljiva-opis/gljiva-opis.component';
import { LogInformaComponent } from './log-informa/log-informa.component';
import { EditFormaComponent } from './edit-forma/edit-forma.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    FUNGUSComponent,
    ABOUTUSComponent,
    GljivaOPISComponent,
    LogInformaComponent,
    EditFormaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
