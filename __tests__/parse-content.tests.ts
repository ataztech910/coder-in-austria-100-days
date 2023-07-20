import { getPage } from "@/app/utils/contentful";
import { popularBlogContent, recommendedBlogContent, rescentBlogContent } from "@/app/utils/parseContent";

describe("Parse content check", () => {
  let data: IContentfulData[] = [];
  beforeEach(async () => {
    data = await getPage({
      pageContentType: 'blogItem',
      locale: 'en-US',
      limit: 1000
    }, false);
  });
  it("Should render the recomended content", () => {
    const blogContent = recommendedBlogContent(data);
    expect(blogContent[0].title).toBe(`React Labs: What We've Been Working On – June 2022 (recomended)`);
    expect(JSON.stringify(blogContent[0].tag)).toBe(JSON.stringify({ color: 'darkBlue', isSmall: false, title: 'reactJs' }));
    expect(blogContent[0].image).toBe('//images.ctfassets.net/wc4oyxpiv5l2/3RXfN46Fk7dZ8Ya3Nn0VVI/bd5a32515f91a5f467a5ad4ee5b7ec13/OIG.UJtMkuVlIIljWvk3W1.jpg');
    expect(blogContent[0].date).toBe('2 May, 2023');
  });

  it("Should render the rescend content", () => {
    const blogContent = rescentBlogContent(data);
    expect(blogContent[0].title).toBe(`React Labs: What We've Been Working On – June 2022`);
    expect(JSON.stringify(blogContent[0].tag)).toBe(JSON.stringify({ color: 'darkBlue', isSmall: false, title: 'reactJs' }));
    expect(blogContent[0].image).toBe('//images.ctfassets.net/wc4oyxpiv5l2/3RXfN46Fk7dZ8Ya3Nn0VVI/bd5a32515f91a5f467a5ad4ee5b7ec13/OIG.UJtMkuVlIIljWvk3W1.jpg');
    expect(blogContent[0].date).toBe('2 May, 2023');
  });

  it("Should render the popular content", () => {
    const blogContent = popularBlogContent(data);
    expect(blogContent[0].title).toBe(`Efficient String Concatenation in Python (popular)`);
    expect(blogContent[0].image).toBe('//images.ctfassets.net/wc4oyxpiv5l2/6UM0j3UTK4dXJz7fvA8GqR/3d1b97746441d823b83ca7f33e6ec919/python.jpg');
    expect(blogContent[0].date).toBe('2 May, 2023');
  });
});

