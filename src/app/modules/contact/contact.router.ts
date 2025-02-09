import express from 'express';
import { contactControllers } from './contact.controller';

const router = express.Router();

router.post('/', contactControllers.createContact);

export const contactRoutes = router;
