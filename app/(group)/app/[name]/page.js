import { Button } from "@/components/button";

import HelloWorld from "./hello.mdx";

export function generateStaticParams() {
  return [{ name: "hello" }, { name: "world" }];
}

export default function Page({ params: { name } }) {
  return (
    <>
      <HelloWorld param={name} />

      <Button />
    </>
  );
}
