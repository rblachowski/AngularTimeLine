import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { FormNamesComponent } from './components/form-names/form-names.component';
import { NewFormComponent } from './components/new-form/new-form.component';
import { ResultComponent } from './components/result/result.component';
import { ModalComponent } from './components/modal/modal.component';
import { ItemComponent } from './components/timeline/item/item.component';
import { PwtComponent } from './components/table/pwt/pwt.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    FormNamesComponent,
    NewFormComponent,
    ResultComponent,
    ModalComponent,
    ItemComponent,
    PwtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
