import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { Character } from '../models/character';
import { HttpService } from './http.service';

@Injectable()
export class StudentService {
    public students = new BehaviorSubject<Array<Character>>(new Array<Character>());
    public students$ = this.students.asObservable();

    constructor (private httpServive: HttpService) {}

    get() {
        this.httpServive.Get('api/characters/students').subscribe((requesResult) => {
            if(requesResult != null) {
                this.students.next(requesResult);
            }
            else {
                this.students.next(null);
            }
        });
    }

    add(newStudent: Character) {
        this.students.value.unshift(newStudent);
        this.students.next(this.students.value);
    }
}