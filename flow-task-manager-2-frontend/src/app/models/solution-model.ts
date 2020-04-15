export interface Solution {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  taskId: number;
  username: string;
  ratings: any[];
  posts: any[];
}