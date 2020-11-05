import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { character } from '../models/character';
import { House } from '../models/house';
import { HttpService } from './http.service';

@Injectable()
export class CharacterService {
    private characters = new BehaviorSubject<Array<character>>(new Array<character>());
    private characters$ = this.characters.asObservable();

    constructor (private httpServive: HttpService) {}

    getByHouse(house: House) {
        if(house != null) {
            this.httpServive.Get('api/characters/house/' + house.name).subscribe((requesResult) => {
                if(requesResult != null) {
                    this.characters.next(requesResult);
                    console.log(this.characters);
                }
                else {
                    this.characters.next(null);
                }
            });
        }
    }
}