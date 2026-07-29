type Diff<O, O1> = Prettify<Omit<O, keyof O1> & Omit<O1, keyof O>>;
