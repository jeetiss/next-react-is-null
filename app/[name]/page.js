import HelloWorld from "../hello.mdx";

export default function Page({ params: { name } }) {
  return <HelloWorld param={name} />;
}
