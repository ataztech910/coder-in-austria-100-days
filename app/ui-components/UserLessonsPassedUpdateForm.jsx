/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserLessonsPassed } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserLessonsPassedUpdateForm(props) {
  const {
    id: idProp,
    userLessonsPassed: userLessonsPassedModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    courseID: "",
    lastQuestionaireScore: "",
    lessonID: "",
    owner: "",
  };
  const [courseID, setCourseID] = React.useState(initialValues.courseID);
  const [lastQuestionaireScore, setLastQuestionaireScore] = React.useState(
    initialValues.lastQuestionaireScore
  );
  const [lessonID, setLessonID] = React.useState(initialValues.lessonID);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userLessonsPassedRecord
      ? { ...initialValues, ...userLessonsPassedRecord }
      : initialValues;
    setCourseID(cleanValues.courseID);
    setLastQuestionaireScore(cleanValues.lastQuestionaireScore);
    setLessonID(cleanValues.lessonID);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [userLessonsPassedRecord, setUserLessonsPassedRecord] = React.useState(
    userLessonsPassedModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserLessonsPassed, idProp)
        : userLessonsPassedModelProp;
      setUserLessonsPassedRecord(record);
    };
    queryData();
  }, [idProp, userLessonsPassedModelProp]);
  React.useEffect(resetStateValues, [userLessonsPassedRecord]);
  const validations = {
    courseID: [],
    lastQuestionaireScore: [],
    lessonID: [],
    owner: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          courseID,
          lastQuestionaireScore,
          lessonID,
          owner,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            UserLessonsPassed.copyOf(userLessonsPassedRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserLessonsPassedUpdateForm")}
      {...rest}
    >
      <TextField
        label="Course id"
        isRequired={false}
        isReadOnly={false}
        value={courseID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              courseID: value,
              lastQuestionaireScore,
              lessonID,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.courseID ?? value;
          }
          if (errors.courseID?.hasError) {
            runValidationTasks("courseID", value);
          }
          setCourseID(value);
        }}
        onBlur={() => runValidationTasks("courseID", courseID)}
        errorMessage={errors.courseID?.errorMessage}
        hasError={errors.courseID?.hasError}
        {...getOverrideProps(overrides, "courseID")}
      ></TextField>
      <TextField
        label="Last questionaire score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lastQuestionaireScore}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              courseID,
              lastQuestionaireScore: value,
              lessonID,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.lastQuestionaireScore ?? value;
          }
          if (errors.lastQuestionaireScore?.hasError) {
            runValidationTasks("lastQuestionaireScore", value);
          }
          setLastQuestionaireScore(value);
        }}
        onBlur={() =>
          runValidationTasks("lastQuestionaireScore", lastQuestionaireScore)
        }
        errorMessage={errors.lastQuestionaireScore?.errorMessage}
        hasError={errors.lastQuestionaireScore?.hasError}
        {...getOverrideProps(overrides, "lastQuestionaireScore")}
      ></TextField>
      <TextField
        label="Lesson id"
        isRequired={false}
        isReadOnly={false}
        value={lessonID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              courseID,
              lastQuestionaireScore,
              lessonID: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.lessonID ?? value;
          }
          if (errors.lessonID?.hasError) {
            runValidationTasks("lessonID", value);
          }
          setLessonID(value);
        }}
        onBlur={() => runValidationTasks("lessonID", lessonID)}
        errorMessage={errors.lessonID?.errorMessage}
        hasError={errors.lessonID?.hasError}
        {...getOverrideProps(overrides, "lessonID")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              courseID,
              lastQuestionaireScore,
              lessonID,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userLessonsPassedModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userLessonsPassedModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
