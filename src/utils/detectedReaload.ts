
export const detectReload = () => {
    const [navigation] = window.performance.getEntriesByType("navigation");

    // Verifica si navigation es de tipo PerformanceNavigationTiming
    if ((navigation as PerformanceNavigationTiming)?.type === "reload") {
        return true;
    }
    return false;
};