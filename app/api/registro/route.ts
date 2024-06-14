"use server";

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { Nombre, Apellido, Cuidad, Telefono } = reqBody;
    console.log(reqBody);
    const newUser = new User({
      Nombre: Nombre,
      Apellido: Apellido,
      Telefono: Telefono,
      Cuidad: Cuidad,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
