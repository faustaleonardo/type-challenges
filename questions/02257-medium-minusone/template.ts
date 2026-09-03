type ParseInt<S extends string> = S extends `${infer N extends number}`
  ? N
  : never;

type MinusOneStr<S extends string> = S extends `${infer R}0`
  ? MinusOneStr<R> extends "0"
    ? "9"
    : `${MinusOneStr<R>}9`
  : S extends `${infer R}1`
    ? `${R}0`
    : S extends `${infer R}2`
      ? `${R}1`
      : S extends `${infer R}3`
        ? `${R}2`
        : S extends `${infer R}4`
          ? `${R}3`
          : S extends `${infer R}5`
            ? `${R}4`
            : S extends `${infer R}6`
              ? `${R}5`
              : S extends `${infer R}7`
                ? `${R}6`
                : S extends `${infer R}8`
                  ? `${R}7`
                  : S extends `${infer R}9`
                    ? `${R}8`
                    : never;

type MinusOne<T extends number> = ParseInt<MinusOneStr<`${T}`>>;
