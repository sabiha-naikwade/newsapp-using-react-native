import {format} from 'date-fns';

export const formatDate = (string, dateFormat) => {
  return format(new Date(string), dateFormat ? dateFormat : 'dd/MM/yyyy');
};

export const currentDateTimeToString = dateFormat => {
  return format(new Date(), dateFormat ? dateFormat : 'ddMMyyyyHHmmss');
};

export const formatDateTime = (string, dateFormat) => {
  return format(
    new Date(string),
    dateFormat ? dateFormat : 'dd/MM/yyyy HH:mm a',
  );
};

export const formatDateNonNumeric = (string, dateFormat) => {
  return format(new Date(string), dateFormat ? dateFormat : 'dd MMMM yyyy');
};
