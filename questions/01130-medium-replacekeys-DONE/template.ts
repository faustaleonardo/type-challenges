type ReplaceKeys<U, T, Y extends Record<string, unknown>> =
  U extends Record<string, unknown>
    ? {
        [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
      }
    : never;
