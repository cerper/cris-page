"use server";

import { connect } from "@/dbConfig/dbConfig";
import User from "@/app/models/userModels";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
