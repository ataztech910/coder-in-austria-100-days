import { tagToObject } from "./tagToObject";


const recomendedBlogContent = (initialContent: IContentfulData[]): IBlogBasic[] => {
  if (!Array.isArray(initialContent)) {
    throw Error('Wrong data format');
  }

  const parsedData = [] as IBlogBasic[];
  const isRecomended = initialContent.filter((item: IContentfulData) => {
    return item.fields.recommended;
  });
  
  isRecomended.forEach((item: IContentfulData) => {
    const date = new Date(item.sys.updatedAt);
    const [month, year] = [
      date.getDate(),
      date.getFullYear(),
    ];
    parsedData.push({
      title: item.fields.title,
      tag: tagToObject(item.metadata.tags[0], false),
      image: item.fields.topImage.fields.file.url,
      date: `${month} ${date.toLocaleString('default', { month: 'short' })}, ${year}`,
      slug: item.fields.slug
    });
  });

  return parsedData;
};

const rescentBlogContent = (initialContent: IContentfulData[]): IBlogItem[] => {
  if (!Array.isArray(initialContent)) {
    throw Error('Wrong data format');
  }

  const parsedData = [] as IBlogItem[];
  const isRescent = initialContent.filter((item: IContentfulData) => {
    return item.fields.rescent;
  });

  isRescent.forEach((item: IContentfulData) => {
    const date = new Date(item.sys.updatedAt);
    const [month, year] = [
      date.getDate(),
      date.getFullYear(),
    ];
    parsedData.push({
      title: item.fields.title,
      tag: tagToObject(item.metadata.tags[0], true),
      image: item.fields.topImage.fields.file.url,
      date: `${month} ${date.toLocaleString('default', { month: 'short' })}, ${year}`,
      slug: item.fields.slug,
      text: item.fields.blogText.content[0].content[0].value.substring(0, 200)
    });
  });

  return parsedData;
};

const popularBlogContent = (initialContent: IContentfulData[]): IBlogBasic[] => {
  if (!Array.isArray(initialContent)) {
    throw Error('Wrong data format');
  }

  const parsedData = [] as IBlogBasic[];
  const isPopular = initialContent.filter((item: IContentfulData) => {
    return item.fields.popular;
  });

  isPopular.forEach((item: IContentfulData) => {
    const date = new Date(item.sys.updatedAt);
    const [month, year] = [
      date.getDate(),
      date.getFullYear(),
    ];
    parsedData.push({
      title: item.fields.title,
      image: item.fields.topImage.fields.file.url,
      date: `${month} ${date.toLocaleString('default', { month: 'short' })}, ${year}`,
      slug: item.fields.slug
    });
  });

  return parsedData;
};


export { recomendedBlogContent, rescentBlogContent, popularBlogContent };