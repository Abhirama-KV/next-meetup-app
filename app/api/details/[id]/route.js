import Meetup from "@/app/(model)/Meetup";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        console.log(id)
        const data = await Meetup.findByIdAndDelete(id);
        console.log(data)
        return NextResponse.json({ message: 'DELETED', response: '201' })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: 'error while deleting', response: '500' })
    }
}

export async function GET(req,{params}){
    try{
        const {id} = params;
        const data = await Meetup.findById(id)
        console.log(data)
        return NextResponse.json({ message: data, response: '201' })
    }catch(err){
        console.log(err)
        return NextResponse.json({ message: 'error while getting', response: '500' })
    }
}