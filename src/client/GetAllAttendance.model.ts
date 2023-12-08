import { Attendance } from "./Attendance.model";
import { User } from "./User.model";

export interface GetAllAttendance {
  id: number;
  user: User;
  status: string;
  attendance: Attendance;
  createdAt: string;
}
