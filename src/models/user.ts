import * as mongoose from "mongoose"

const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: String,
})
const User = mongoose.model("user", UserSchema)

export default User