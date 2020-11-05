import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { Character } from '../models/character';
import { HttpService } from './http.service';

@Injectable()
export class TeacherService {
    public teachers = new BehaviorSubject<Array<Character>>(new Array<Character>());
    public teachers$ = this.teachers.asObservable();

    constructor (private httpServive: HttpService) {}

    get() {
        this.httpServive.Get('api/characters/staff').subscribe((requesResult) => {
            if(requesResult != null) {
                this.teachers.next(requesResult);
            }
            else {
                this.teachers.next(null);
            }
        });
    }
}