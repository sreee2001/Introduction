import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    template: `
        <section>
            <h2>Industry Portfolio Items</h2>
            <p>
                Model each case study with problem, constraints, architecture, and outcomes.
            </p>
        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPageComponent {}
