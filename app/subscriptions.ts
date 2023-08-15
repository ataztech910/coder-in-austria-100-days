/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserDetails = /* GraphQL */ `
  subscription OnCreateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onCreateUserDetails(filter: $filter, owner: $owner) {
      id
      name
      birthday
      country
      couresToPass
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserDetails = /* GraphQL */ `
  subscription OnUpdateUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onUpdateUserDetails(filter: $filter, owner: $owner) {
      id
      name
      birthday
      country
      couresToPass
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserDetails = /* GraphQL */ `
  subscription OnDeleteUserDetails(
    $filter: ModelSubscriptionUserDetailsFilterInput
    $owner: String
  ) {
    onDeleteUserDetails(filter: $filter, owner: $owner) {
      id
      name
      birthday
      country
      couresToPass
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
