// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Languages = {
  "ENGLISH": "ENGLISH",
  "RUSSIAN": "RUSSIAN"
};

const { UserLessonsPassed, UserData } = initSchema(schema);

export {
  UserLessonsPassed,
  UserData,
  Languages
};