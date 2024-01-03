type Primitive = string | number | boolean | bigint | symbol | undefined | null;
type Builtin = Primitive | Date | Error | RegExp;

type DeepReadonly<T> = T extends Builtin
  ? T
  : T extends object
    ? Readonly<{
        [K in keyof T]: T[K] extends Primitive ? T[K] : DeepReadonly<T[K]>;
      }>
    : T extends Array<infer U>
      ? U extends Primitive
        ? Readonly<Array<U>>
        : Readonly<Array<DeepReadonly<U>>>
      : never;
