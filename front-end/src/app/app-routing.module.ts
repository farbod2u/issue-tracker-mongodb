import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IssueCreateComponent} from "./components/issue-create/issue-create.component";
import {IssueEditComponent} from "./components/issue-edit/issue-edit.component";
import {IssueListComponent} from "./components/issue-list/issue-list.component";

const routes: Routes = [
  {path: 'issue-create', component: IssueCreateComponent},
  {path: 'issue-edit/:id', component: IssueEditComponent},
  {path: 'issue-list', component: IssueListComponent},
  {path: '', redirectTo: 'issue-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
