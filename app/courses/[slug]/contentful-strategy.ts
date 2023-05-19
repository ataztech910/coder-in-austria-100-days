import { getPage } from "@/app/utils/contentful";
import { builder } from "./contentful-builder";

export default class ContentfulStrategy implements ICourseStrategy {
    
    async getFromContentful(slug: string) {
        return await getPage({
            pageContentType: 'course',
            locale: 'en-US',
            limit: 1000,
            slug
    }, false);
    }

    async getCourse(slug: string): Promise<ICourse> {
        const data = await this.getFromContentful(slug);
        return builder(data[0]);
    }
}