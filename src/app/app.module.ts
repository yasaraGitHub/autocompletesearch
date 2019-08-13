import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule,MatInputModule,MatAutocompleteModule } from '@angular/material';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ChildComponenetComponent } from './child-componenet/child-componenet.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponenetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //FormControl,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
