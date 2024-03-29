import connectToDB from "@/database";
import User from "@/models/dataModels";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB().then((response) => console.log(response)).catch(err => console.log(err));

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const getAllAccounts = await User.find({ uid: id });

    if (getAllAccounts) {
      return NextResponse.json({
        success: true,
        data: getAllAccounts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went wrong",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something Went wrong",
    });
  }
}
