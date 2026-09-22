// this is for controlling the chatbot functionality
import { NextResponse } from "next/server";

export async function POST(req : Request) {
    const {message} = await req.json()

    console.log(message)
    return NextResponse.json({
        "Message" : "Message is reaching the server component Successfully"
    })
}