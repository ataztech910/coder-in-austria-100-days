// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserDetails, UserLessonsPassed } = initSchema(schema);

export {
  UserDetails,
  UserLessonsPassed
};