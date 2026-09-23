// this is for the registeration page 
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req : Request){
    await connectDB()
    const {Username , Email , Password} = await req.json()
    
    const existing_user = await User.findOne({Email})

    if (existing_user){
        return NextResponse.json({
            "message" : "User already Exists" ,
            "status" : 409
        })
    }
    const newuser = await User.create(
        {
            Username ,
            Email ,
            Password
        }
    )
    


    console.log(Username)
    console.log(Password)
    console.log(Email)

    return NextResponse.json({
        "Message" : "User Registered Successfully" ,
        "status" : 201
    })
}