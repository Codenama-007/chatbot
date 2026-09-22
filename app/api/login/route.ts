import { NextResponse } from "next/server";

export async function POST(req : Request){
    const {Email , Password} = await req.json()

    console.log(Email)
    console.log(Password)

    return NextResponse.json({
        "message" : "data Reached the backend Successfully" ,
        "status" : 200 
    })
}