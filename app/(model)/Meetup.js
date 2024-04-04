import mongoose,{Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI)

mongoose.Promise = global.Promise;

const meetupSchema = new Schema({
    title:String,
    image:String,
    description:String,
    address:String
},
{
    timestamps:true
})

const Meetup = mongoose.models.Meetup || mongoose.model('Meetup',meetupSchema)

export default Meetup;