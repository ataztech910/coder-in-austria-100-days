export default class CourseStrategyContext {
    private strategy: ICourseStrategy;

    constructor(strategy: ICourseStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: ICourseStrategy) {
        this.strategy = strategy;
    }

    public getCourseFromAPI(slug: string): Promise<ICourse> {
        return this.strategy.getCourse(slug);
    }
}
