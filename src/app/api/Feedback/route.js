import dbConnect from "@/app/utils/dbConnection";
import Feedback from "@/app/models/Feedback";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        await dbConnect();

        const { safetyRating, commRating, thumbs, traits, feedback } = await request.json();
        await Feedback.create({ safetyRating, commRating, thumbs, traits, feedback });
        return NextResponse.json({ success: true }, { status: 200 });
    }
    catch (error) {
        console.error("Error saving feedback:", error.message);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}