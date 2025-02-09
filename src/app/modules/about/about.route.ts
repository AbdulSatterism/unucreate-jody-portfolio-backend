/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';
import fileUploadHandler from '../../middlewares/fileUploadHandler';
import validateRequest from '../../middlewares/validateRequest';
import { aboutValidations } from './about.validation';
import { aboutControllers } from './about.controller';

const router = express.Router();

router.post(
  '/create-about',
  auth(USER_ROLES.ADMIN),
  fileUploadHandler(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(aboutValidations.createAboutValidationSchema),
  aboutControllers.createAbout,
);

router.get('/all-about', aboutControllers.allAbout);

router.get('/about-details/:id', aboutControllers.singleAbout);

router.post(
  '/update-about/:id',
  auth(USER_ROLES.ADMIN),
  fileUploadHandler(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(aboutValidations.updateAboutValidationSchema),
  aboutControllers.updateAbout,
);

export const aboutRoutes = router;
