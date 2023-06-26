import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerUserLessonsPassed = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserLessonsPassed, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseID?: string | null;
  readonly moduleID?: string | null;
  readonly lessonID?: string | null;
  readonly lastQuestionaireScore?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserLessonsPassed = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserLessonsPassed, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseID?: string | null;
  readonly moduleID?: string | null;
  readonly lessonID?: string | null;
  readonly lastQuestionaireScore?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserLessonsPassed = LazyLoading extends LazyLoadingDisabled ? EagerUserLessonsPassed : LazyUserLessonsPassed

export declare const UserLessonsPassed: (new (init: ModelInit<UserLessonsPassed>) => UserLessonsPassed) & {
  copyOf(source: UserLessonsPassed, mutator: (draft: MutableModel<UserLessonsPassed>) => MutableModel<UserLessonsPassed> | void): UserLessonsPassed;
};