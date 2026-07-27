type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = From extends ""
  ? S
  : S extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}`
    : S;
