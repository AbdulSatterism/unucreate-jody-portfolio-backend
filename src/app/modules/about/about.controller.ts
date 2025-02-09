import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { aboutServices } from './about.service';

const createAbout = catchAsync(async (req, res) => {
  let image;
  if (req.files && 'image' in req.files && req.files.image[0]) {
    image = `/images/${req.files.image[0].filename}`;
  }

  const value = {
    image,
    ...req.body,
  };

  const result = await aboutServices.createAbout(value);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'ui/ux desiginer info created successfully',
    data: result,
  });
});

const allAbout = catchAsync(async (req, res) => {
  const result = await aboutServices.allAbout();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'retrive all about successfully',
    data: result,
  });
});

const singleAbout = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await aboutServices.singleAbout(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'single about retrive successfully',
    data: result,
  });
});

const updateAbout = catchAsync(async (req, res) => {
  const { id } = req.params;

  let image;
  if (req.files && 'image' in req.files && req.files.image[0]) {
    image = `/images/${req.files.image[0].filename}`;
  }

  const value = {
    image,
    ...req.body,
  };

  const result = await aboutServices.updateAbout(id, value);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'info updated successfully',
    data: result,
  });
});

export const aboutControllers = {
  createAbout,
  allAbout,
  singleAbout,
  updateAbout,
};
