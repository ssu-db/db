import { Subject } from "./Subject.model";
import { User } from "./User.model";

export interface Notice {
  id: number;
  author: User;
  subject: Subject;
  title: string;
  description: string;
  createdAt: string;
}
