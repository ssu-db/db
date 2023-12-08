import { Subject } from "./Subject.model";
import { Week } from "./Week.model";

export interface Attendance {
  id: number;
  week: Week;
  attendanceAt: string;
  location: string;
  isDone: boolean;
  createdAt: string;
}
