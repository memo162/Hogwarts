import { Component } from '@angular/core';

import { House } from 'src/app/models/house';
import { CharacterService } from 'src/app/services/character.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
    selector: 'app-houses',
    templateUrl: 'houses.component.html',
    styleUrls: ['houses.component.css']
})

export class HousesComponent{
    public houses: Array<House>;
    public selectedHouse: House;

    constructor(
        private houseService: HouseService,
        private characterService: CharacterService
        ) {}

    ngOnInit() {
        this.houses = this.houseService.get();
    }

    selectHouse(house: House) {
        this.selectedHouse = house;
        this.characterService.getByHouse(house);
    }
}