import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    myRole: { type: String, required: true },
    process: { type: String, required: true },
    deliverable: { type: String, required: true },
    outcome: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Project = model<TProject>('Project', projectSchema);
