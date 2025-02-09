/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';
import fileUploadHandler from '../../middlewares/fileUploadHandler';
import validateRequest from '../../middlewares/validateRequest';
import { projectValidations } from './project.validation';
import { projectControllers } from './project.controller';

const router = express.Router();

router.post(
  '/create-project',
  auth(USER_ROLES.ADMIN),
  fileUploadHandler(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(projectValidations.createProjectValidationSchema),
  projectControllers.createProject,
);

router.get('/all-project', projectControllers.allProjects);

router.get('/project-details/:id', projectControllers.singleProject);

router.post(
  '/update-project/:id',
  auth(USER_ROLES.ADMIN),
  fileUploadHandler(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(projectValidations.updateProjectValidationSchema),
  projectControllers.updateProject,
);

export const projectRoutes = router;
