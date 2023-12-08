import { Subject } from "./Subject.model";
import { User } from "./User.model";

export interface GetAllSubjects {
  id: number;
  user: User;
  subject: Subject;
  createdAt: string;
}
