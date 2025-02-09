import express from 'express';
import { AuthRoutes } from '../app/modules/auth/auth.route';

import { UserRoutes } from '../app/modules/user/user.route';
import { projectRoutes } from '../app/modules/projects/project.route';
import { aboutRoutes } from '../app/modules/about/about.route';
import { contactRoutes } from '../app/modules/contact/contact.router';
const router = express.Router();

const apiRoutes = [
  { path: '/user', route: UserRoutes },
  { path: '/auth', route: AuthRoutes },
  { path: '/project', route: projectRoutes },
  { path: '/about', route: aboutRoutes },
  { path: '/contact', route: contactRoutes },
];

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;
