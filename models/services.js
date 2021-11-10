import mongoose from 'mongoose'

const Schema = mongoose.Schema

const serviceSchema = new Schema({
  name: String,
  tasty: Boolean,
  owner: {type: Schema.Types.ObjectId, 'ref': "Profile"}
})

const service = mongoose.model('service', serviceSchema)

export {
  service
}
