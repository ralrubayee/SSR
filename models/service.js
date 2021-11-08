import mongoose from "mongoose"

const Schema = mongoose.Schema

const serviceSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const service = mongoose.model("Taco", serviceSchema)

export {
 service
}