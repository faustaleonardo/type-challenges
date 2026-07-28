type LengthOfString<
  S extends string,
  T extends unknown[] = [],
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [F, ...T]>
  : T["length"];
