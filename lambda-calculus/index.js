// λxy.x
const True = (T, _) => T;

// λxy.y
const False = (_, F) => F;

// λb.(b False True)
const Not = (bool) => bool(False, True);

// λab.aba
// const And = (bool1, bool2) => bool1(bool2(True, False), False);
// const And = (bool1, bool2) => bool1(bool2, False);
const And = (bool1, bool2) => bool1(bool2, bool1);

// λab.aab
// const Or = (bool1, bool2) => bool1(True, bool2(True, False));
// const Or = (bool1, bool2) => bool1(True, bool2);
const Or = (bool1, bool2) => bool1(bool1, bool2);

// λab.a(Not b)b
// const Xor = (bool1, bool2) => bool1(bool2(False, True), bool2(True, False));
const Xor = (bool1, bool2) => bool1(Not(bool2), bool2);

// λab.ab(Not b)
// const Eq = (bool1, bool2) => bool1(bool2(True, False), bool2(False, True));
const Eq = (bool1, bool2) => bool1(bool2, Not(bool2));

// λsz.z
const Zero = (s, z) => z;

// λsz.sz === λsz.s(z)
const One = (s, z) => s(z);

// λsz.ssz === λsz.s(s(z))
const Two = (s, z) => s(s(z));

// λmnsz.msnsz === λsz.m(s n(s z))
const Add = (m, n, s, z) => m(s, n(s, z));
