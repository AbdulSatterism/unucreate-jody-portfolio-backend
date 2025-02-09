import { Schema, model } from 'mongoose';
import { TAbout } from './about.interface';

const devAboutSchema = new Schema<TAbout>({
  description: { type: String, required: true },
  image: { type: String, required: true },
  instagram: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String, required: true },
});

export const About = model<TAbout>('About', devAboutSchema);
