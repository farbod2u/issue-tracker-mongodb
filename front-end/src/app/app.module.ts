import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";

import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IssueListComponent} from './components/issue-list/issue-list.component';
import {IssueCreateComponent} from './components/issue-create/issue-create.component';
import {IssueEditComponent} from './components/issue-edit/issue-edit.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        AppComponent,
        IssueListComponent,
        IssueCreateComponent,
        IssueEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatDividerModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule,
        MatSnackBarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatCardModule, MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
