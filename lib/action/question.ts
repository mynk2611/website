"use server"

import prisma from "../../db"

export async function Question({ name, email, message }: { name: string, email: string, message: string }) {

  try {
    await prisma.question.create({
      data: {
        name: name,
        email: email,
        questin: message,
      }
    });

    return {
      message: "Question created successfully",
    };
  } catch (error) {
    console.error("error while adding question entry :", error)
  }
}
