// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserLessonsPassed } = initSchema(schema);

export {
  UserLessonsPassed
};