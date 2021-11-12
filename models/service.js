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
const movieSchema = new Schema({
  name: String,
  year: Number,
  link: String,
})

const showSchema = new Schema({
  name: String,
  year: Number,
  link: String,
})

const serviceSchema = new Schema({
  name: String,
  link: String,
  Description: String,
  sub: String,
  movies: [movieSchema],
  shows: [showSchema],
  reviews: [reviewSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})


const Service = mongoose.model("service", serviceSchema)

export {
  Service
}
