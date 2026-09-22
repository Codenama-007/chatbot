// this is for the registeration page 
import { NextResponse } from "next/server";

export async function POST(req : Request){
    const {Username , Email , Password} = await req.json()
    

    console.log(Username)
    console.log(Password)
    console.log(Email)

    return NextResponse.json({
        "Message" : "Data Reacehed server component"
    })
}