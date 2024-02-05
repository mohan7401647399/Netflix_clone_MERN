import connectToDB from "@/database";
import Favorites from "@/models/Favorite";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Favorite item ID is required for deleting action",
      });
    }

    const deletedFavoriteItem = await Favorites.findByIdAndDelete(id);

    if (deletedFavoriteItem) {
      return NextResponse.json({
        success: true,
        message: "Removed from your favourite list",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "delete not done",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something Went wrong in delete option",
    });
  }
}
