import Link from "next/link";

export default function Page() {
  return (
    <>
      <main>Projects</main>
      <Link href={"/app"}>App router</Link>
    </>
  );
}
