import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import { Character } from '../models/character';
import { House } from '../models/house';
import { HttpService } from './http.service';

@Injectable()
export class CharacterService {
    public characters = new BehaviorSubject<Array<Character>>(new Array<Character>());
    public characters$ = this.characters.asObservable();

    constructor (private httpServive: HttpService) {}

    getByHouse(house: House) {
        if(house != null) {
            this.httpServive.Get('api/characters/house/' + house.name).subscribe((requesResult) => {
                if(requesResult != null) {
                    this.characters.next(requesResult);
                }
                else {
                    this.characters.next(null);
                }
            });
        }
    }
}