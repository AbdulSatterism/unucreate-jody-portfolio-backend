import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { projectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  let image;
  if (req.files && 'image' in req.files && req.files.image[0]) {
    image = `/images/${req.files.image[0].filename}`;
  }

  const value = {
    image,
    ...req.body,
  };

  const result = await projectServices.createProject(value);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'project created successfully',
    data: result,
  });
});

const allProjects = catchAsync(async (req, res) => {
  const result = await projectServices.allProjects();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'retrive all project successfully',
    data: result,
  });
});

const singleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.singleProject(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'single project retrive successfully',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;

  let image;
  if (req.files && 'image' in req.files && req.files.image[0]) {
    image = `/images/${req.files.image[0].filename}`;
  }

  const value = {
    image,
    ...req.body,
  };

  const result = await projectServices.updateProject(id, value);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'project updated successfully',
    data: result,
  });
});

export const projectControllers = {
  createProject,
  allProjects,
  singleProject,
  updateProject,
};
