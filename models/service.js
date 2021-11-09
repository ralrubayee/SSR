import mongoose from "mongoose"

const Schema = mongoose.Schema


const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    defaut: 5,
  }
}, {
  timestamps: true
})

const serviceSchema = new Schema({
  name: String,
  link: String,
  reviews: [reviewSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})


const Service = mongoose.model("service", serviceSchema)

export {
  Service
}
