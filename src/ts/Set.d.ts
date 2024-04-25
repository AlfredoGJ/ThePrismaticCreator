declare module "core-js/stable/set" {
  export default class Set<T> {
    constructor(iterable?: Iterable<T>);
    add(value: T): Set<T>;
    clear(): void;
    delete(value: T): boolean;
    entries(): IterableIterator<[T, T]>;
    difference(other: SetLike<mixed>): Set;
    intersection(other: SetLike<mixed>): Set;
    isDisjointFrom(other: SetLike<mixed>): boolean;
    isSubsetOf(other: SetLike<mixed>): boolean;
    isSupersetOf(other: SetLike<mixed>): boolean;
    union(other: SetLike<mixed>): Set;
    symmetricDifference(other: SetLike<mixed>): Set;
    forEach(
      callbackfn: (value1: T, value2: T, set: Set<T>) => void,
      thisArg?: any
    ): void;
    has(value: T): boolean;
    keys(): IterableIterator<T>;
    size: number;
    values(): IterableIterator<T>;
    [Symbol.iterator](): IterableIterator<T>;
  }
}
