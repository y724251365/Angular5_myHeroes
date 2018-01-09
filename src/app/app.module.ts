import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes=[
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'detail',component:DetailComponent},
  {path:'**',component:NotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotfoundComponent,
    DetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
