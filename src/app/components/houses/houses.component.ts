import { Component } from '@angular/core';

import { House } from 'src/app/models/house';
import { HousesService } from 'src/app/services/houses.service';

@Component({
    selector: 'app-houses',
    templateUrl: 'houses.component.html',
    styleUrls: ['houses.component.css']
})

export class HousesComponent{
    public houses: Array<House>;
    public selectedHouse: House;

    constructor(private housesService: HousesService) {}

    ngOnInit() {
        this.houses = this.housesService.get();
    }

    selectHouse(house: House) {
        this.selectedHouse = house;
    }
}