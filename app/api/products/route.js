import { NextResponse, NextRequest } from "next/server";
import { productData } from "@/constants/data";

export const GET = async () => {
  try {
    return NextResponse.json({
        message: 'Products fetched successfully',
        success: true,
        productData
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "No product",
      },
      { status: 500 }
    );
  }
};
