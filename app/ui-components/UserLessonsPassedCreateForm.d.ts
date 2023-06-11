/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserLessonsPassedCreateFormInputValues = {
    courseID?: string;
    moduleID?: string;
    lessonID?: string;
    lastQuestionaireScore?: string;
    owner?: string;
};
export declare type UserLessonsPassedCreateFormValidationValues = {
    courseID?: ValidationFunction<string>;
    moduleID?: ValidationFunction<string>;
    lessonID?: ValidationFunction<string>;
    lastQuestionaireScore?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserLessonsPassedCreateFormOverridesProps = {
    UserLessonsPassedCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    courseID?: PrimitiveOverrideProps<TextFieldProps>;
    moduleID?: PrimitiveOverrideProps<TextFieldProps>;
    lessonID?: PrimitiveOverrideProps<TextFieldProps>;
    lastQuestionaireScore?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserLessonsPassedCreateFormProps = React.PropsWithChildren<{
    overrides?: UserLessonsPassedCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserLessonsPassedCreateFormInputValues) => UserLessonsPassedCreateFormInputValues;
    onSuccess?: (fields: UserLessonsPassedCreateFormInputValues) => void;
    onError?: (fields: UserLessonsPassedCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserLessonsPassedCreateFormInputValues) => UserLessonsPassedCreateFormInputValues;
    onValidate?: UserLessonsPassedCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserLessonsPassedCreateForm(props: UserLessonsPassedCreateFormProps): React.ReactElement;
