import { User } from "./User.model";

export interface Subject {
  id: number;
  year: number;
  semester: number;
  name: string;
  professor: User;
  createdAt: string;
}
