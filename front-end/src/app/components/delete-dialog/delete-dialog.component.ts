import {Component, Inject, OnInit} from '@angular/core';
import {IssueService} from "../../services/issue.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {IssueListComponent} from "../issue-list/issue-list.component";

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

    constructor(private issueService: IssueService,
                @Inject(MAT_DIALOG_DATA) private id: string
    ) {
    }

    ngOnInit(): void {
    }

    yesClick() {
        this.issueService.delete(this.id).subscribe({
            next: v => {
                console.log(v);
            },
            error: e => console.log("error on delete issue :: ", e)
        })
    }
}
