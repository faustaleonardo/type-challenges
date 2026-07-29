type Prettify<T> = {
  [K in keyof T]: T[K];
};
type Merge<F, S> = Prettify<Omit<F, keyof S> & S>;
