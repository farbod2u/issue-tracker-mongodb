import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {IssueService} from "../../services/issue.service";
import {Issue} from "../../model/issue";

@Component({
    selector: 'app-issue-list',
    templateUrl: './issue-list.component.html',
    styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
    // @ts-ignore
    issues: Issue[];
    displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

    constructor(private issueService: IssueService, private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        // @ts-ignore
        this.issueService.getAll().subscribe(
            {
                next: (v: Issue[]) => {
                    console.log(v);
                    this.issues = v;
                },
                error: e => console.log("error on getAll issues", e)
            });
    }

    edit(id: string) {
        this.router.navigate([`/issue-edit/ ${id}`]);
    }

    delete(id: string) {
        this.issueService.delete(id).subscribe({
            next: () => this.getAll(),
            error: e => console.log("error on delete issue # " + id, e)
        });
    }

    create() {
        this.router.navigate([`/issue-create/`]);
    }

}
