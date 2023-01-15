import {translate} from './locale';
import {httpStatus} from '../constants';

export const errorHandler = status => {
  let title = `${status}: `;
  let message = '';

  switch (status) {
    case httpStatus.BAD_REQUEST:
      title += translate('badRequestTitle');
      message = translate('badRequestMessage');
      break;
    case httpStatus.UNAUTHORIZED:
      title += translate('unauthorizedRequestTitle');
      message = translate('unauthorizedRequestMessage');
      break;
    case httpStatus.PAYMENT_REQUIRED:
      title += translate('paymentRequiredRequestTitle');
      message = translate('paymentRequiredRequestMessage');
      break;
    case httpStatus.FORBIDDEN:
      title += translate('forbiddenRequestTitle');
      message = translate('forbiddenRequestMessage');
      break;
    case httpStatus.NOT_FOUND:
      title += translate('notFoundRequestTitle');
      message = translate('notFoundRequestMessage');
      break;
    case httpStatus.METHOD_NOT_ALLOWED:
      title += translate('methodNotAllowedRequestTitle');
      message = translate('methodNotAllowedRequestMessage');
      break;
    case httpStatus.NOT_ACCEPTABLE:
      title += translate('notAcceptableRequestTitle');
      message = translate('notAcceptableRequestMessage');
      break;
    case httpStatus.INTERNAL_SERVER_ERROR:
      title += translate('internalServerErrorRequestTitle');
      message = translate('internalServerErrorRequestMessage');
      break;
    default:
      title += translate('defaultRequestTitle');
      message = translate('defaultRequestMessage');
      break;
  }
  return {title, message};
};
