import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FormNamesComponent } from './components/form-names/form-names.component';

const routes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path: '', component: FormNamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
