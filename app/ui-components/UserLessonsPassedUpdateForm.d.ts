/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserLessonsPassed } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserLessonsPassedUpdateFormInputValues = {
    courseID?: string;
    moduleID?: string;
    lessonID?: string;
    lastQuestionaireScore?: string;
    owner?: string;
};
export declare type UserLessonsPassedUpdateFormValidationValues = {
    courseID?: ValidationFunction<string>;
    moduleID?: ValidationFunction<string>;
    lessonID?: ValidationFunction<string>;
    lastQuestionaireScore?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserLessonsPassedUpdateFormOverridesProps = {
    UserLessonsPassedUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    courseID?: PrimitiveOverrideProps<TextFieldProps>;
    moduleID?: PrimitiveOverrideProps<TextFieldProps>;
    lessonID?: PrimitiveOverrideProps<TextFieldProps>;
    lastQuestionaireScore?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserLessonsPassedUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserLessonsPassedUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userLessonsPassed?: UserLessonsPassed;
    onSubmit?: (fields: UserLessonsPassedUpdateFormInputValues) => UserLessonsPassedUpdateFormInputValues;
    onSuccess?: (fields: UserLessonsPassedUpdateFormInputValues) => void;
    onError?: (fields: UserLessonsPassedUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserLessonsPassedUpdateFormInputValues) => UserLessonsPassedUpdateFormInputValues;
    onValidate?: UserLessonsPassedUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserLessonsPassedUpdateForm(props: UserLessonsPassedUpdateFormProps): React.ReactElement;
