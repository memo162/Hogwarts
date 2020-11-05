import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})

export class CardComponent {
    @Input() characters: Array<Character>;

    getAge(character: Character) {
        let currentYear = new Date().getFullYear();

        if(character.yearOfBirth != null && character.yearOfBirth > 0) {
            return currentYear - character.yearOfBirth;
        }

        return;
    }
}