import mongoose, { Schema } from "mongoose";
import { User } from "../models/users";

const UserSchema: Schema = new Schema({
        username: {type: String, require: true},
        password: {type: String, require: true}
},{
    timestamps: true
});

export default mongoose.model<User>('Users', UserSchema);