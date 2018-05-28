import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './common/index/index.component';
import { HeroesComponent } from './modules/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
