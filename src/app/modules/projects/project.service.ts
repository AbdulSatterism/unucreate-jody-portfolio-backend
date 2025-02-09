import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { TProject } from './project.interface';
import { Project } from './project.model';
import unlinkFile from '../../../shared/unlinkFile';

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);

  return result;
};

const allProjects = async () => {
  const result = await Project.find();

  return result;
};

const singleProject = async (id: string) => {
  const isExistProject = await Project.findById(id);

  if (!isExistProject) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'project not found');
  }

  return isExistProject;
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const isProjectExist = await Project.findById(id);

  if (!isProjectExist) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'project not found');
  }

  if (payload.image && isProjectExist.image) {
    unlinkFile(isProjectExist.image);
  }

  const result = await Project.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

export const projectServices = {
  createProject,
  allProjects,
  singleProject,
  updateProject,
};
