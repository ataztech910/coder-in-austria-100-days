/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserLessonsPassed = /* GraphQL */ `
  subscription OnCreateUserLessonsPassed(
    $filter: ModelSubscriptionUserLessonsPassedFilterInput
    $owner: String
  ) {
    onCreateUserLessonsPassed(filter: $filter, owner: $owner) {
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
export const onUpdateUserLessonsPassed = /* GraphQL */ `
  subscription OnUpdateUserLessonsPassed(
    $filter: ModelSubscriptionUserLessonsPassedFilterInput
    $owner: String
  ) {
    onUpdateUserLessonsPassed(filter: $filter, owner: $owner) {
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
export const onDeleteUserLessonsPassed = /* GraphQL */ `
  subscription OnDeleteUserLessonsPassed(
    $filter: ModelSubscriptionUserLessonsPassedFilterInput
    $owner: String
  ) {
    onDeleteUserLessonsPassed(filter: $filter, owner: $owner) {
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
