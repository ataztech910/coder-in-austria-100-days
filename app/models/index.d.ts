import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Languages {
  ENGLISH = "ENGLISH",
  RUSSIAN = "RUSSIAN"
}



type EagerUserLessonsPassed = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserLessonsPassed, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseID?: string | null;
  readonly lastQuestionaireScore?: number | null;
  readonly lessonID?: string | null;
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
  readonly lastQuestionaireScore?: number | null;
  readonly lessonID?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserLessonsPassed = LazyLoading extends LazyLoadingDisabled ? EagerUserLessonsPassed : LazyUserLessonsPassed

export declare const UserLessonsPassed: (new (init: ModelInit<UserLessonsPassed>) => UserLessonsPassed) & {
  copyOf(source: UserLessonsPassed, mutator: (draft: MutableModel<UserLessonsPassed>) => MutableModel<UserLessonsPassed> | void): UserLessonsPassed;
}

type EagerUserData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isMentor: boolean;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly language?: Languages | keyof typeof Languages | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isMentor: boolean;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly language?: Languages | keyof typeof Languages | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserData = LazyLoading extends LazyLoadingDisabled ? EagerUserData : LazyUserData

export declare const UserData: (new (init: ModelInit<UserData>) => UserData) & {
  copyOf(source: UserData, mutator: (draft: MutableModel<UserData>) => MutableModel<UserData> | void): UserData;
}