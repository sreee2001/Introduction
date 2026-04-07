import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly navItems = [
        { path: '/tutorial', label: 'Tutorial' },
        { path: '/deep-dives', label: 'Deep Dives' },
        { path: '/portfolio', label: 'Portfolio' },
    ];
}
