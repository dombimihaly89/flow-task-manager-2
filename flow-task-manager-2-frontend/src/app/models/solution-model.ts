import { Task } from './task-model';
import { User } from './user-model';

export interface Solution {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  taskId: number;
  userId: number;
  ratings: any[];
  posts: any[];
}