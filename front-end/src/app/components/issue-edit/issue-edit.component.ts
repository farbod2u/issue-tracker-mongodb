import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IssueService} from "../../services/issue.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Issue} from "../../model/issue";

@Component({
    selector: 'app-issue-edit',
    templateUrl: './issue-edit.component.html',
    styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

    // @ts-ignore
    form: FormGroup;
    // @ts-ignore
    id: string;

    constructor(private issueService: IssueService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private snackBar: MatSnackBar) {
        this.form = this.fb.group({
            title: ['', Validators.required],
            responsible: '',
            description: '',
            severity: '',
            status: ''
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(param => {
            // @ts-ignore
            this.issueService.get(param.id).subscribe({
                next: v => {
                    console.log("get Issue :: ", v);

                    let issue = new Issue();
                    issue = (v as Issue);
                    this.id = issue._id;
                    this.form.get("title")?.setValue(issue.title);
                    this.form.get("severity")?.setValue(issue.severity);
                    this.form.get("description")?.setValue(issue.description);
                    this.form.get("responsible")?.setValue(issue.responsible);
                    this.form.get("status")?.setValue(issue.status);
                },
                error: e => console.log("error on get issue :: ", e)
            })
        })
    }

    save(title: string, responsible: string, description: string, severity: string, status: string) {
        let issue: Issue = new Issue();
        issue._id = this.id;
        issue.title = title;
        issue.responsible = responsible;
        issue.description = description;
        issue.severity = severity;
        issue.status = status;
        this.issueService.update(issue).subscribe({
                next: v => {
                    console.log("update Issue :: ", v);
                    this.snackBar.open("Issue updated.", "OK", {duration: 3000});
                    //this.router.navigate(["/issue-list"]);
                },
                error: e => console.log("updating issue problem :: ", e)
            }
        );
    }
}
