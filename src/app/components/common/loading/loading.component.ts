import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-loaging',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.css']
})

export class LoadingComponent {
    public isLoading: boolean = false;
    private unsubscribe: Subject<void> = new Subject();

    constructor(private LoadingService: LoadingService) {}

    ngOnInit() {
        this.LoadingService.isLoading$.pipe(takeUntil(this.unsubscribe)).subscribe(result => {
            this.isLoading = result;
        });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}