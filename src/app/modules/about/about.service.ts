import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import unlinkFile from '../../../shared/unlinkFile';
import { TAbout } from './about.interface';
import { About } from './about.model';

const createAbout = async (payload: TAbout) => {
  const result = await About.create(payload);

  return result;
};

const allAbout = async () => {
  const result = await About.find();

  return result;
};

const singleAbout = async (id: string) => {
  const isAboutExist = await About.findById(id);

  if (!isAboutExist) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'info not found');
  }

  return isAboutExist;
};

const updateAbout = async (id: string, payload: Partial<TAbout>) => {
  const isAboutExist = await About.findById(id);

  if (!isAboutExist) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'project not found');
  }

  if (payload.image && isAboutExist.image) {
    unlinkFile(isAboutExist.image);
  }

  const result = await About.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

export const aboutServices = {
  createAbout,
  allAbout,
  singleAbout,
  updateAbout,
};
