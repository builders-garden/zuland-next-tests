import { NextRequest, NextResponse } from "next/server";
// import { init } from "@akashaorg/core-sdk";
// const sdk = init();

// @ts-ignore
import { System, applyImportMap } from "systemjs";
// const { System, applyImportMap } = require("systemjs");

applyImportMap(System, {
  imports: {
    "@akashaorg/core-sdk": "./node_modules/@akashaorg/core-sdk/lib/index.js",
  },
});

// System.import("@akashaorg/core-sdk").then((module: any) => {
//   // sdk module is imported
//   console.log(typeof module.getSDK); // should be function
// });

(async () => {
  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = await System.import("@akashaorg/core-sdk");
  // sdk module is imported
  // @ts-ignore
  console.log(typeof module.getSDK); // should be function
})();

const postHandler = async (req: NextRequest) => {
  const body = await req.json();
  // await sdk.services.common.lit.connect();
  // console.log("Connected to Lit");

  // const { ciphertext, dataToEncryptHash } =
  //   await sdk.services.common.lit.encryptText("Hello Akasha!");
  // console.log("Encrypted text:", ciphertext);
  return NextResponse.json({
    body,
  });
};

const getHandler = async (req: NextRequest) => {
  return NextResponse.json({ message: "Hello Akasha!" });
};

export const GET = getHandler;
export const POST = postHandler;
