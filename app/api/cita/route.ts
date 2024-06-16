"use server";

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { redirect } from "next/navigation";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { Nombre, Apellido, Cuidad, Telefono } = reqBody;
    console.log(reqBody);
    const newUser = new User({
      Nombre,
      Apellido,
      Telefono,
      Cuidad,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
