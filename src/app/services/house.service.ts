import {Injectable} from '@angular/core';
import { House } from '../models/house';

@Injectable()
export class HouseService {

    get() {
        let houses = new Array<House>();

        houses = [
                {
                    id: 1,
                    name: 'Slytherin',
                    code: 'sly',
                },
                {
                    id: 2,
                    name: 'Gryffindor',
                    code: 'gry',
                },
                {
                    id: 3,
                    name: 'Ravenclaw',
                    code: 'rav',
                },
                {
                    id: 4,
                    name: 'Hufflepuff',
                    code: 'huf',
                }
            ];

        return houses;
    }
}