import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";


export async function POST(req : Request){
    await connectDB()
    const {Email , Password} = await req.json()

    console.log(Email)
    console.log(Password)

    return NextResponse.json({
        "message" : "data Reached the backend Successfully" ,
        "status" : 200 
    })
}