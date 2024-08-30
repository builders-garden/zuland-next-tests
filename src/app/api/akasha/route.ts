import { NextRequest, NextResponse } from "next/server";
import { init } from "@akashaorg/core-sdk";

const sdk = init();

const postHandler = async (req: NextRequest) => {
  const body = await req.json();
  return NextResponse.json({ body });
};

const getHandler = async (req: NextRequest) => {
  await sdk.services.common.lit.connect();
  console.log("Connected to Lit");

  const { ciphertext, dataToEncryptHash } =
    await sdk.services.common.lit.encryptText("Hello Akasha!");
  console.log("Encrypted text:", ciphertext);

  return NextResponse.json({ message: "Hello Akasha!" });
};

export const GET = getHandler;
export const POST = postHandler;
