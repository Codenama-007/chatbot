import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User"
import bcrypt from "bcryptjs";


export async function POST(req : Request){
    try {
    await connectDB()
    const {Email , Password} = await req.json()
    const existing_user = await User.findOne({Email})

    const hashed_password = bcrypt.hash(Password , 10) 
    if (existing_user ){

        return NextResponse.json({
            "message" : "User Exists" ,
            "status_code" : 200
        })
    }

    console.log(Email)
    console.log(Password)

    return NextResponse.json({
        "message" : "data Reached the backend Successfully" ,
        "status" : 200 
    })
        
    } catch (error) {
        return NextResponse.json({
            "message" : "Internal Server Error" ,
            "status" : 500
        })
    }
    await connectDB()
    const {Email , Password} = await req.json()
    const existing_user = await User.findOne({Email})

    if (existing_user){

        return NextResponse.json({
            "message" : "User Exists" ,
            "status_code" : 200
        })
    }

    console.log(Email)
    console.log(Password)

    return NextResponse.json({
        "message" : "data Reached the backend Successfully" ,
        "status" : 200 
    })
}