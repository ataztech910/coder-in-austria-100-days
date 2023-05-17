import { builder } from "@/app/courses/[slug]/contentful-builder";
import ContentfulStrategy from "@/app/courses/[slug]/contentful-strategy"
import CourseStrategyContext from "@/app/courses/[slug]/course-strategy-context"

describe("Get course should provide data", () => {
    it("Should get datat from contentful", async () => {
        const strategy = new CourseStrategyContext(new ContentfulStrategy());
        const result: any = await strategy.getCourseFromAPI('basic-informatics-and-computer-science');
    })
})