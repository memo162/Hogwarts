import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/models/character';
import { StudentService } from 'src/app/services/student.service';

@Component({
    selector: 'app-student-form',
    templateUrl: 'studentForm.component.html',
    styleUrls: ['studentForm.component.css']
})

export class StudentFormComponent {
    @Output() onCancel: EventEmitter<any> = new EventEmitter();
    @Output() onSave: EventEmitter<any> = new EventEmitter();
    
    studentForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(4)]),
        patronus: new FormControl('', Validators.required),
        yearOfBirth: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4)])
    });

    constructor(private studentService: StudentService) {}

    saveStudent() {
        let newStudent = new Character();
        newStudent.name = this.studentForm.controls['name'].value;
        newStudent.patronus = this.studentForm.controls['patronus'].value;
        newStudent.yearOfBirth = this.studentForm.controls['yearOfBirth'].value;

        this.studentService.add(newStudent);
        this.onSave.emit([]);
        return;
    }

    cancel() {
        this.onCancel.emit([]);
    }

    get f() {
        return this.studentForm.controls;
    }
}