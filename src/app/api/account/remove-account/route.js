import connectToDB from "@/database";
import User from "@/models/dataModels";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB().then((response) => console.log(response)).catch(err => console.log(err));
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Account ID is mandatory",
      });
    }

    const deleteAccount = await User.findByIdAndDelete(id);

    if (deleteAccount) {
      return NextResponse.json({
        success: true,
        message: "Account deleted successfully",
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
