import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
	clerkId: { type: String, require: true, unique: true },
	email: { type: String, require: true, unique: true },
	usename: { type: String, require: true, unique: true },
	firstname: { type: String, require: true },
	lastname: { type: String, require: true },
	photo: { type: String, require: true },
})

const User = models.User || model('User', UserSchema)

export default User
