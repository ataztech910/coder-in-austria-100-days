const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

type GetPageParams = {
    pageContentType: string;
    slug: string;
    locale: string;
};

async function getPage(params: GetPageParams) {
    const query = {
      limit: 1,
      include: 10,
      locale: params.locale,
      'fields.slug': params.slug,
      content_type: params.pageContentType,
    };
    const { items: [page] } = await client.getEntries(query);
    return page || null;
};

export { getPage };