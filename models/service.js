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
  Description: String,
  sub: String,
  movie1: String,
  movie2: String,
  movie3: String,
  movie4: String,
  movie5: String,
  Tv1:String,
  Tv2:String,
  Tv3:String,
  Tv4:String,
  Tv5:String,
  reviews: [reviewSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})


const Service = mongoose.model("service", serviceSchema)

export {
  Service
}
