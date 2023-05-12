import Link from "next/link";

export default function Page() {
  return (
    <>
      <main>Projects</main>
      <Link href={"/app/hello"}>App router</Link>
    </>
  );
}
