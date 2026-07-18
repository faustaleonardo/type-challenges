type TrimRight<S extends string> = S extends `${infer R}${Whitespace}`
  ? TrimRight<R>
  : S;
