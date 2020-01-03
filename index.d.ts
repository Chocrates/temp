declare module 'octomock' {
    class octomock {
        constructor();
        logger: any;
        defaultContext: any;
        mockFunctions: any;
        mockGitHubImplementation: any;
        mockCoreImplementation: any;
        updateGitHubImplementation(implementation: any): void;
        getGitHubImplementation(): any;
        getCoreImplementation(): any;
        updateCoreImplementation(implementation: any): void;
        resetMocks(): void;
        updateContext(context: any): void;
        getContext(): any;
        setup(): void;
    }
}
