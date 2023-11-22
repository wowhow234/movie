import Head from "next/head";

export default function Title({ title }) {
  return (
    <div>
      <Head>
        <title> {title} | WoW Movies </title>
      </Head>
    </div>
  );
}
