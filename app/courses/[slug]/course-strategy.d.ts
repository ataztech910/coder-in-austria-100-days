interface ICourseStrategy {
    getCourse(slug: string): Promise<ICourse>;
}