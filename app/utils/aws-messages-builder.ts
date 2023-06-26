import { InputNames } from "./namespace";

const awsMessagesBuilder = (errorMessage: string) => {

  const errorsList = [
    {
      awsId: 'username cannot be empty',
      field: InputNames.USERNAME ,
      errorMessage: 'Please fill the username'
    }
  ]; 

  return errorsList.find((item: IError) => item.awsId === errorMessage.toLocaleLowerCase());
};

export { awsMessagesBuilder };