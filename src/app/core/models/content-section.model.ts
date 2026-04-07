export type ContentCategory = 'tutorial' | 'deep-dive' | 'portfolio';

export interface ContentSection {
    id: string;
    category: ContentCategory;
    title: string;
    summary: string;
    tags: string[];
    route: string;
    published: boolean;
    updatedAt: string;
}
