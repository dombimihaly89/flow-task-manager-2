export interface Task {
  id: number;
  type: string;
  title: string;
  content: string;
  difficulty: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  solutions: number;
  posts: any[];
}