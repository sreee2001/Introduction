import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tutorial',
    },
    {
        path: 'tutorial',
        loadComponent: () =>
            import('@features/tutorial/tutorial.page').then((m) => m.TutorialPageComponent),
    },
    {
        path: 'deep-dives',
        loadComponent: () =>
            import('@features/deep-dives/deep-dives.page').then((m) => m.DeepDivesPageComponent),
    },
    {
        path: 'portfolio',
        loadComponent: () =>
            import('@features/portfolio/portfolio.page').then((m) => m.PortfolioPageComponent),
    },
    {
        path: '**',
        loadComponent: () =>
            import('@features/not-found/not-found.page').then((m) => m.NotFoundPageComponent),
    },
];
