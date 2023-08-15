import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly birthday?: string | null;
  readonly country?: string | null;
  readonly couresToPass?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly birthday?: string | null;
  readonly country?: string | null;
  readonly couresToPass?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDetails = LazyLoading extends LazyLoadingDisabled ? EagerUserDetails : LazyUserDetails

export declare const UserDetails: (new (init: ModelInit<UserDetails>) => UserDetails) & {
  copyOf(source: UserDetails, mutator: (draft: MutableModel<UserDetails>) => MutableModel<UserDetails> | void): UserDetails;
};

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