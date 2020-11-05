import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable()
export class LoadingService {
    public isLoading = new BehaviorSubject<boolean>(false);
    public isLoading$ = this.isLoading.asObservable();

    start() {
        this.isLoading.next(true);
    }

    stop() {
        this.isLoading.next(false);
    }
}