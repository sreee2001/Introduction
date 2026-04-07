import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-tutorial-page',
    standalone: true,
    template: `
        <section>
            <h2>Comprehensive Angular 21 Tutorial</h2>
            <p>
                Start writing your topic index, chapter list, and learning paths here.
            </p>
        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialPageComponent {}
