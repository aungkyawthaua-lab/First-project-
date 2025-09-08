import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My First Website</title>
      </Head>

      <h1 style={{textAlign:"center", marginTop:"50px"}}>
        🎉 Hello World! Welcome to My Website 🎉
      </h1>
      <p style={{textAlign:"center"}}>
        This is my first project with Next.js and Vercel.
      </p>
    </>
  );
}
