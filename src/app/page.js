"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  console.log(router);

  function onClickHandler(){
    router.push("/products")
  }
  return (
    <div>
      <h1>Hello This is Saketh Sampath Vinay. I'm Learning Next.js</h1>
      <br />
      <Link href = {"/products"}>Navigate to Products Route/Segment</Link>
      <br />
      <Link href = {"/accounts"}>Navigate to Accounts Route/Segment</Link>
      <br />
      <button onClick={onClickHandler}>Navigate to Products using useRouter</button>
    </div>
  );
}
