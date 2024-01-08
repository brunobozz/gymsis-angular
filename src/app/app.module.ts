import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//COMPONENTS
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

//MODULES
import { HomeModule } from './modules/home/home.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';
import { ConfigurationsModule } from './modules/configurations/configurations.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainMenuComponent,
    MainFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

    //MODULES
    HomeModule,
    ProfileModule,
    ExercisesModule,
    WorkoutsModule,
    ConfigurationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
