// this is for the registeration page 
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const { username, email, password } = await req.json()

        await connectDB()
        const existing_user = await User.findOne({ email })

        if (existing_user) {
            return NextResponse.json({
                "message": "User already Exists",
                "status": 409
            })
        }

        const hashed_password = await bcrypt.hash(password, 10)
        const newuser = await User.create(
            {
                username,
                email,
                password: hashed_password
            }
        )

        console.log(username)
        console.log(password)
        console.log(email)
        console.log(hashed_password)

        return NextResponse.json({
            "user id": newuser.id,
            "Message": "User Registered Successfully",
            "status": 201
        })

    } catch (error) {
        console.log(" Kuch toh gadbad ho gayi daya ")
        console.log(error)
        return NextResponse.json({
            "message": "Internal Server Error",
            "status_code": 500
        })
    }
}