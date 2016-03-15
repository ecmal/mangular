export declare class Menu {
    sections: any;
    private location;
    private openedSection;
    private currentPage;
    private currentSection;
    constructor(location: any, rootScope: any);
    selectSection(section: any): void;
    toggleSelectSection(section: any): void;
    isSectionSelected(section: any): boolean;
    selectPage(section: any, page: any): void;
    isPageSelected(page: any): boolean;
    onLocationChange(): void;
}
