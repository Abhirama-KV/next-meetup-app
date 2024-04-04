import Image from "next/image";

import React from 'react'
import Home from "./(components)/Home";

const page = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default page



// npm install mongodb mongoose
// / .env.local pswd

// in (models) 
// Tiket
// import mongoose,{Scheme} 
// mondoose.connect(process.env.MONGODB_URI)
// mondoose.Promise = global.Promise

// const teketSchema = new Schema({
// title:String,
// },{

// })

// const Tiket = mongoose.model('tiket',teketSchema)
// https://github.com/ClarityCoders/Ticket-Tutorial-App/blob/master/app/models/Ticket.js
// export default Tiket

//api >> Tickets >> router.js

// fetch('/api/Tickets')


// in router
// import Tickets frm model
// {NextResponse} from next/server
// export async fun POST(req){
// try{
  //body = req.json)_ 
// tiketData = body.formData
// await Tiket.create(tiketData)
// NextResponse.json({":''"})
// 
// 
// }


// user: abhiramakv
// pass: h4kzsFLoUk9pl8m8

// mongodb+srv://abhiramakv:h4kzsFLoUk9pl8m8@cluster0.cduonnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0