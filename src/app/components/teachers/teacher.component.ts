import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
    selector: 'app-teachers',
    templateUrl: 'teacher.component.html',
    styleUrls: ['teacher.component.css']
})

export class TeachersComponent {
    private unsubscribe: Subject<void> = new Subject();
    public teachers: Array<Character> = new Array<Character>();

    constructor(
        private teacherService: TeacherService,
    ) {}

    ngOnInit() {
        this.teacherService.teachers$.pipe(takeUntil(this.unsubscribe)).subscribe(result => {
            this.teachers = result;
        });

        this.teacherService.get();
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}