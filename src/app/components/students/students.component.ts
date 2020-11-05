import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { StudentService } from 'src/app/services/student.service';

@Component({
    selector: 'app-students',
    templateUrl: 'students.component.html',
    styleUrls: ['students.component.css']
})

export class StudentsComponent {
    private unsubscribe: Subject<void> = new Subject();
    public students: Array<Character> = new Array<Character>();
    public showStudentform: boolean = false;

    constructor(
        private studentService: StudentService,
    ) {}

    ngOnInit() {
        this.studentService.students$.pipe(takeUntil(this.unsubscribe)).subscribe(result => {
            this.students = result;
        });

        this.studentService.get();
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    showAddForm() {
        this.showStudentform = true;
    }

    close() {
        this.showStudentform = false;
    }
}