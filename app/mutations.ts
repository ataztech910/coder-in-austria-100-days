/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserDetails = /* GraphQL */ `
  mutation CreateUserDetails(
    $input: CreateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    createUserDetails(input: $input, condition: $condition) {
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
export const updateUserDetails = /* GraphQL */ `
  mutation UpdateUserDetails(
    $input: UpdateUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    updateUserDetails(input: $input, condition: $condition) {
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
export const deleteUserDetails = /* GraphQL */ `
  mutation DeleteUserDetails(
    $input: DeleteUserDetailsInput!
    $condition: ModelUserDetailsConditionInput
  ) {
    deleteUserDetails(input: $input, condition: $condition) {
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
