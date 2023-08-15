import { API } from "aws-amplify";
import { listUserDetails, listUserLessonsPasseds } from "@/app/queries.ts";
import { getPage } from "@/app/utils/contentful.ts";

enum GQL_Namespace {
  DETAILS = 'listUserDetails',
  LESSONS_PASSED = 'listUserLessonsPassed'
}

const GQL_Models: {[key in GQL_Namespace]: string} = {
  [GQL_Namespace.DETAILS] : listUserDetails,
  [GQL_Namespace.LESSONS_PASSED] : listUserLessonsPasseds,
};

const getDataFromDB = (model: GQL_Namespace) => {
  return API.graphql({ query: GQL_Models[model] });
};

async function getPageData(slug: string) {
  return await getPage({
    pageContentType: 'blogItem',
    locale: 'en-US',
    limit: 1000,
    slug
  }, false);
}

async function getBlogData() {
  return await getPage({
    pageContentType: 'blogItem',
    locale: 'en-US',
    limit: 1000
  }, false);
}


export { getDataFromDB, GQL_Namespace, getPageData, getBlogData };