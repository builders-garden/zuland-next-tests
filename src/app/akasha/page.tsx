"use client";

import { init } from "@akashaorg/core-sdk";
import { useEffect, useState } from "react";

export default function AkashaPage() {
  const [encryptText, setEncryptText] = useState("");
  const akashaSdk = init();

  const encryptUsingLit = async (msg: string) => {
    const { ciphertext, dataToEncryptHash } =
      await akashaSdk.services.common.lit.encryptText(msg);
    console.log("Encrypted text:", ciphertext);
    setEncryptText(ciphertext);
  };

  useEffect(() => {
    const initLit = async () => {
      console.log("connecting to Lit");
      await akashaSdk.services.common.lit.connect();
      console.log("connected to Lit");
      console.log("Encrypting text");
      const { ciphertext, dataToEncryptHash } =
        await akashaSdk.services.common.lit.encryptText("Hello Akasha!");
      console.log("Encrypted text:", ciphertext);
    };

    initLit();
  }, [akashaSdk]);

  return (
    <div>
      <h1>Welcome to Akasha</h1>
      <p>Encrypted Text: {encryptText}</p>
      <h2>Encrypt Text</h2>
      <p>Click the button below to encrypt text</p>
      <p>Text to encrypt: Hello Akasha!</p>
      <button onClick={() => encryptUsingLit("Hello Akasha!")}>
        Encrypt Text
      </button>
    </div>
  );
}
