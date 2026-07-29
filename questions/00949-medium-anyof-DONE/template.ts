type Falsy =
  | 0
  | ""
  | []
  | Record<PropertyKey, never>
  | null
  | undefined
  | false;

type AnyOf<T extends readonly any[]> = T extends readonly [infer F, ...infer R]
  ? F extends Falsy
    ? AnyOf<R>
    : true
  : false;
