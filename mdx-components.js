export function useMDXComponents(components) {
  return {
    ...components,
    wrapper: ({ children, param }) => (
      <>
        <div>{param}</div>
        <div>{children}</div>
      </>
    ),
  };
}
