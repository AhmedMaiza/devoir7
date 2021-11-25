import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';


const routes: Routes = [
  {path : "enseignant", component : EnseignantComponent},
  {path : "add-enseignant", component : AddEnseignantComponent},
  {path: "", redirectTo:"enseignant",pathMatch: "full"},
  {path: "updateEnseignant/:id", component: UpdateEnseignantComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
