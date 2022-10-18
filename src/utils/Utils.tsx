import _ from 'lodash';
import dayjs from 'dayjs';

export const handleException = (error: unknown): void => {
  console.log(error);
};

export const getValue: <T, U>(data: T, value: string, defaultValue?: U) => U = (
  data,
  value,
  defaultValue?,
) => {
  return _.get(data, value, defaultValue);
};
export const checkEmpty: <T>(obj: T) => boolean = obj => {
  return _.isEmpty(obj);
};

export const checkNull: <T>(obj: T) => boolean = obj => {
  return _.isNil(obj);
};

export const checkUnderfined: <T>(obj: T) => boolean = obj => {
  return _.isUndefined(obj);
};

export const checkEmptyOrUnderfined: <T>(obj: T) => boolean = obj => {
  if (checkEmpty(obj) || checkUnderfined(obj)) {
    return true;
  }
  return false;
};

export const isNullOrEmpty: <T>(obj: T) => boolean = obj => {
  if (checkNull(obj) || checkEmpty(obj)) {
    return true;
  }
  return false;
};

export const checkNullOrEmpty: <T>(data: T) => boolean = data => {
  return checkNull(data) || checkEmpty(data);
};

export const toLowerCase = (text: string): string => {
  return _.toLower(text);
};

export const convertString: <T>(data: T) => string = data => {
  return _.toString(data);
};

export const formatDateTime = (value: string, formatType: string): string => {
  if (checkNullOrEmpty(value)) {
    return '';
  }
  return dayjs(value).format(formatType);
};

export const removeAccent = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};
