import Link from "next/link";
import { Button } from "@/components/button";

export default function Page() {
  return (
    <>
      <main>Page</main>
      <Link href={"/projects"}>projects</Link>

      <Button />
    </>
  );
}
