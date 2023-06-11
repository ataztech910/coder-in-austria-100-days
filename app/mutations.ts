/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserLessonsPassed = /* GraphQL */ `
  mutation CreateUserLessonsPassed(
    $input: CreateUserLessonsPassedInput!
    $condition: ModelUserLessonsPassedConditionInput
  ) {
    createUserLessonsPassed(input: $input, condition: $condition) {
      id
      courseID
      moduleID
      lessonID
      lastQuestionaireScore
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserLessonsPassed = /* GraphQL */ `
  mutation UpdateUserLessonsPassed(
    $input: UpdateUserLessonsPassedInput!
    $condition: ModelUserLessonsPassedConditionInput
  ) {
    updateUserLessonsPassed(input: $input, condition: $condition) {
      id
      courseID
      moduleID
      lessonID
      lastQuestionaireScore
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserLessonsPassed = /* GraphQL */ `
  mutation DeleteUserLessonsPassed(
    $input: DeleteUserLessonsPassedInput!
    $condition: ModelUserLessonsPassedConditionInput
  ) {
    deleteUserLessonsPassed(input: $input, condition: $condition) {
      id
      courseID
      moduleID
      lessonID
      lastQuestionaireScore
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
