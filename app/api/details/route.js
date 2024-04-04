import React from 'react';
import Meetup from '@/app/(model)/Meetup';
import { NextResponse } from 'next/server';


export async function POST(req){
    try{
        const dataJson = await req.json();
        console.log(dataJson)
        // const data = dataJson.formData;
        // console.log(data)
        const meetup = await Meetup.create(dataJson)
        console.log(meetup)

        return NextResponse.json({message:'meetup created',response:'201'})
    }catch (err){
        console.log(err)
        return NextResponse.json({message:'meetup not created',response:'500'})
    }
}

export async function GET(req){
    try{
        const data = await Meetup.find();

        return NextResponse.json({data,response:'201'})
    }catch(err){
        console.log(err)
        return NextResponse.json({message:'error',response:'500'})
    }
}
