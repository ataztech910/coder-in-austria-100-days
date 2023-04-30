const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

type GetPageParams = {
    pageContentType: string;
    locale: string;
    slug?: string;
    limit?: number;
};

async function getPage(params: GetPageParams, isSinglePage = true) {
    const query = {
      limit: params?.limit ?? 1,
      include: 10,
      locale: params.locale,
      'fields.slug': params.slug,
      content_type: params.pageContentType,
    };
    if (isSinglePage) {
      const { items: [page] } = await client.getEntries(query);
      return page || null;
    }
    const { items } = await client.getEntries(query);
    return items || null;
};

export { getPage };