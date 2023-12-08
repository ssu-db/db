import { Subject } from "./Subject.model";

export interface Week {
  id: number;
  subject: Subject;
  title: string;
  sequence: number;
  startAt: string;
  endAt: string;
  deadline: string;
  video: string;
  runningTime: number;
  createdAt: string;
}
