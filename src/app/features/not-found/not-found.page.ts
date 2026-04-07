import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found-page',
    standalone: true,
    imports: [RouterLink],
    template: `
        <section>
            <h2>Page not found</h2>
            <p>The route you requested does not exist yet.</p>
            <a routerLink="/tutorial">Go to tutorial home</a>
        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
