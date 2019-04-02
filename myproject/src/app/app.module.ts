import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RouterModule, Routes} from '@angular/router';
import { EditComponent } from './edit/edit.component'; 
 
const appRoutes: Routes = [
  {
     path: '',
     component: LoginComponent
  },
  
  {
     path: 'mainpage',
     component: MainpageComponent
  },

  {
    path: 'edit',
    component: MainpageComponent
 }
];

@NgModule({
  declarations: 
  [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainpageComponent,
    EditComponent
  ],

  imports: 
  [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }