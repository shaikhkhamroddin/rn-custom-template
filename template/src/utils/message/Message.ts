import {Alert} from 'react-native';
import SentryModuleInstance from '../sentry/SentryModule';

export const showAlert = (str: string) => {
  Alert.alert(str);
};

export const isServerError = (status: number) => {
  return status?.toString()?.charAt(0) === '5';
};

export const showAPIError = (error: any) => {
  const res = error?.response;
  if (res?.data) {
    const errorMessage =
      res?.data?.errors?.length > 0
        ? res?.data?.errors[0]?.message
        : res?.data?.detail
        ? res?.data?.detail
        : res?.data && typeof res?.data === 'string'
        ? res?.data
        : '';

    showAlert(errorMessage);
  } else {
    showAlert('Something went wrong');
  }
  SentryModuleInstance.postError(error);
  throw error;
};

export const showRejectedError = (error: any) => {
  if (isServerError(error?.status)) {
    showAlert('Internal Server Error');
  } else if (error?.detail) {
    showAlert(error?.detail);
  } else {
    showAlert('Something went wrong');
  }
  SentryModuleInstance.postError(error);
};

export const getErrorMessage = (error: any): string => {
  const res = error?.response;
  if (isServerError(res?.status)) {
    return 'Internal Server Error';
  } else {
    const errorMessage: string =
      res?.data?.errors?.length > 0
        ? res?.data?.errors[0]?.message
        : res?.data?.detail
        ? res?.data?.detail
        : res?.data && typeof res?.data === 'string'
        ? res?.data
        : 'Something went wrong';
    return errorMessage;
  }
};
