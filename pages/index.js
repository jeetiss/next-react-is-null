import Link from "next/link";

export default function Page() {
  return (
    <>
      <main>Page</main>
      <Link href={"/projects"}>projects</Link>
    </>
  );
}
