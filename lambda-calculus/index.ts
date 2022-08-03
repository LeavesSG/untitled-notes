// explicitly declare these types to help compiler to compute.
type G = true;
type H = false;

type True<T, _> = T;
type False<_, U> = U;
type Bool<T, U> = True<T, U> | False<T, U>;

// a media type to simulate invoke Bool Fn with given generic param.
type InvokeBool<T, U, B extends Bool<T, U>, V, W> = B extends True<T, U>
  ? V
  : W;

type Not<T, U, B extends Bool<T, U>> = InvokeBool<
  T,
  U,
  B,
  False<T, U>,
  True<T, U>
>;
type AssertNot = Not<G, H, True<G, H>> extends False<G, H> ? G : H; // True<G,H> = G

// λb.λa.b(a(True False) False)
type And<T, U, B1 extends Bool<T, U>, B2 extends Bool<T, U>> = InvokeBool<
  T,
  U,
  B1,
  B2,
  False<T, U>
>;
type AssertAnd = And<G, H, True<G, H>, False<G, H>> extends False<G, H> ? G : H; // True<G,H> = G

type Or = __Todo;
type Xor = __Todo;
type Eq = __Todo;

type Zero<T, U> = U;

declare type __Todo = any;
export type {};
