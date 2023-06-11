/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserLessonsPassed = /* GraphQL */ `
  query GetUserLessonsPassed($id: ID!) {
    getUserLessonsPassed(id: $id) {
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
export const listUserLessonsPasseds = /* GraphQL */ `
  query ListUserLessonsPasseds(
    $filter: ModelUserLessonsPassedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLessonsPasseds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserLessonsPasseds = /* GraphQL */ `
  query SyncUserLessonsPasseds(
    $filter: ModelUserLessonsPassedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserLessonsPasseds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
