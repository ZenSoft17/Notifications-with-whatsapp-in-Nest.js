import { Schema } from 'mongoose';
import UsersEntity from './users.entity';

export const UsersSchema = new Schema<UsersEntity>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  days: { type: Number, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true }
});
