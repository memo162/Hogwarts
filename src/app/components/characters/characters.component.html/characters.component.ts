import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { DatePipe } from '@angular/common'

@Component({
    selector: 'app-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.css']
})

export class CharactersComponent {
    private unsubscribe: Subject<void> = new Subject();
    public characters: Array<Character> = new Array<Character>();

    constructor(
        private characterService: CharacterService,
        public datepipe: DatePipe
    ) {}

    ngOnInit() {
        this.characterService.characters$.pipe(takeUntil(this.unsubscribe)).subscribe(result => {
            this.characters = result;
        });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getAge(character: Character) {
        let currentYear = new Date().getFullYear();

        if(character.yearOfBirth != null && character.yearOfBirth > 0) {
            return currentYear - character.yearOfBirth;
        }

        return;
    }
}