import { Rating } from './rating-models/rating-model';

export interface Task {
  id: number;
  type: string;
  title: string;
  content: string;
  difficulty: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  solutions: number;
  posts: any[];
  ratings: Rating[];
}