type PercentageParser<A extends string> = A extends `+${infer R}`
  ? R extends `${infer N}%`
    ? ["+", N, "%"]
    : ["+", R, ""]
  : A extends `-${infer R}`
    ? R extends `${infer N}%`
      ? ["-", N, "%"]
      : ["-", R, ""]
    : A extends `${infer R}%`
      ? ["", R, "%"]
      : ["", A, ""];
