import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-deep-dives-page',
    standalone: true,
    template: `
        <section>
            <h2>Topic Deep Dives</h2>
            <p>
                Add advanced explorations such as signals, SSR, architecture, and testing strategies.
            </p>
        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeepDivesPageComponent {}
