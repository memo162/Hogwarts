import { Component } from '@angular/core';
import { combineAll } from 'rxjs/operators';
import { Character } from 'src/app/models/character';

@Component({
    selector: 'app-students',
    templateUrl: 'students.component.html',
    styleUrls: ['students.component.css']
})

export class StudentsComponent {
    public students: Array<Character> = new Array<Character>();
}