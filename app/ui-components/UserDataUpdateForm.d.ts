/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserDataUpdateFormInputValues = {
    isMentor?: boolean;
    image?: string;
    description?: string;
    language?: string;
    owner?: string;
};
export declare type UserDataUpdateFormValidationValues = {
    isMentor?: ValidationFunction<boolean>;
    image?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserDataUpdateFormOverridesProps = {
    UserDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isMentor?: PrimitiveOverrideProps<SwitchFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<SelectFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userData?: UserData;
    onSubmit?: (fields: UserDataUpdateFormInputValues) => UserDataUpdateFormInputValues;
    onSuccess?: (fields: UserDataUpdateFormInputValues) => void;
    onError?: (fields: UserDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserDataUpdateFormInputValues) => UserDataUpdateFormInputValues;
    onValidate?: UserDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserDataUpdateForm(props: UserDataUpdateFormProps): React.ReactElement;
