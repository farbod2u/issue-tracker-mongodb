import {Component, OnInit} from '@angular/core';
import {IssueService} from "../../services/issue.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Issue} from "../../model/issue";

@Component({
    selector: 'app-issue-create',
    templateUrl: './issue-create.component.html',
    styleUrls: ['./issue-create.component.css']
})
export class IssueCreateComponent implements OnInit {

    // @ts-ignore
    form: FormGroup;

    constructor(private issueService: IssueService, private router: Router, private fb: FormBuilder) {
        this.form = this.fb.group({
            title: ['', Validators.required],
            responsible: '',
            description: '',
            severity: ''
        });
    }

    ngOnInit(): void {
    }

    save(title: string, responsible: string, description: string, severity: string) {
        let issue: Issue = new Issue();
        issue.title = title;
        issue.responsible = responsible;
        issue.description = description;
        issue.severity = severity;
        this.issueService.insert(issue).subscribe({
                next: v => {
                    console.log("saved Issue :: ", v);
                    this.router.navigate(["/issue-list"]);
                },
                error: e => console.log("saving issue problem :: ", e)
            }
        );

    }
}
