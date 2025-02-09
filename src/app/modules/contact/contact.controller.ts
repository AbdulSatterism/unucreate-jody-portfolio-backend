import { StatusCodes } from 'http-status-codes';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { contactMail } from './contact.utils';

const createContact = catchAsync(async (req, res) => {
  const { name, email, message } = req.body;

  await contactMail(email, message, name);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'mail sent successfully',
    data: {},
  });
});

export const contactControllers = {
  createContact,
};
