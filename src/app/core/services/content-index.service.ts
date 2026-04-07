import { Injectable } from '@angular/core';

import { ContentSection } from '@core/models/content-section.model';
import { PortfolioItem } from '@core/models/portfolio-item.model';

@Injectable({ providedIn: 'root' })
export class ContentIndexService {
    readonly sections: ContentSection[] = [];
    readonly portfolioItems: PortfolioItem[] = [];

    getSectionsByCategory(category: ContentSection['category']): ContentSection[] {
        return this.sections.filter((section) => section.category === category);
    }
}
