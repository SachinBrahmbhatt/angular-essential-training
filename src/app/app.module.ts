import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule(
    {
        imports: [
            BrowserModule
        ],
        declarations: [
            AppComponent
        ], //to make comp and pipes 
        bootstrap: [
            AppComponent
        ] //extry point for the app code
    }
)
export class AppModule {}