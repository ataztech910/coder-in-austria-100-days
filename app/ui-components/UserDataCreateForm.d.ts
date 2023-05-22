/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserDataCreateFormInputValues = {
    isMentor?: boolean;
    image?: string;
    description?: string;
    language?: string;
    owner?: string;
};
export declare type UserDataCreateFormValidationValues = {
    isMentor?: ValidationFunction<boolean>;
    image?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDataCreateFormOverridesProps = {
    UserDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isMentor?: PrimitiveOverrideProps<SwitchFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<SelectFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserDataCreateFormProps = React.PropsWithChildren<{
    overrides?: UserDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserDataCreateFormInputValues) => UserDataCreateFormInputValues;
    onSuccess?: (fields: UserDataCreateFormInputValues) => void;
    onError?: (fields: UserDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDataCreateFormInputValues) => UserDataCreateFormInputValues;
    onValidate?: UserDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserDataCreateForm(props: UserDataCreateFormProps): React.ReactElement;
