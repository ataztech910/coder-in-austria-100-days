import { tagToObject } from "./tagToObject";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, INLINES } from "@contentful/rich-text-types";

// const renderOptions = {
//     renderNode: {
//       [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
//         // target the contentType of the EMBEDDED_ENTRY to display as you need
//         if (node.data.target.sys.contentType.sys.id === "blogPost") {
//           return (
//             <a href={`/blog/${node.data.target.fields.slug}`}>{node.data.target.fields.title}</a>
//           );
//         }
//       },
//       [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
//         // target the contentType of the EMBEDDED_ENTRY to display as you need
//         if (node.data.target.sys.contentType.sys.id === "codeBlock") {
//           return (
//             <pre>
//               <code>{node.data.target.fields.code}</code>
//             </pre>
//           );
//         }
  
//         if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
//           return (
//             <iframe
//               src={node.data.target.fields.embedUrl}
//               height="100%"
//               width="100%"
//               frameBorder="0"
//               scrolling="no"
//               title={node.data.target.fields.title}
//               allowFullScreen={true}
//             />
//           );
//         }
//       },
//       [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
//         // render the EMBEDDED_ASSET as you need
//         return (
//           <img
//             src={`https://${node.data.target.fields.file.url}`}
//             height={node.data.target.fields.file.details.image.height}
//             width={node.data.target.fields.file.details.image.width}
//             alt={node.data.target.fields.description}
//           />
//         );
//       },
//     },
// };


const recomendedBlogContent = (initialContent: IContentfulData[]): IBlogBasic[] => {
    if(!Array.isArray(initialContent)) {
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
}

const rescentBlogContent = (initialContent: IContentfulData[]): IBlogItem[] => {
    if(!Array.isArray(initialContent)) {
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
          tag: tagToObject(item.metadata.tags[0], false),
          image: item.fields.topImage.fields.file.url,
          date: `${month} ${date.toLocaleString('default', { month: 'short' })}, ${year}`,
          slug: item.fields.slug,
          text: item.fields.blogText.content[0].content[0].value.substring(0, 200)
      });
    });

    return parsedData;
}

const popularBlogContent = (initialContent: IContentfulData[]): IBlogBasic[] => {
  if(!Array.isArray(initialContent)) {
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
}


export { recomendedBlogContent, rescentBlogContent, popularBlogContent };