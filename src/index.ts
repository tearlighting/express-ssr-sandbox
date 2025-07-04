import "./server"
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

type TStep1<U> = U extends any ? (k: U) => void : never

type TStep2<T extends (...arg: any) => any> = T extends (k: infer I) => void ? I : never
type T = UnionToIntersection<{ a: string } | 1>
type T2 = TStep2<TStep1<{ a: string } | 1>>
