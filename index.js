function deepEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a !== "object" || a === null) {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) {
        return false;
      }
    }
  } else {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEquals(a[key], b[key])) {
        return false;
      }
    }
  }

  return true;
}

// Test cases
console.log(deepEquals(42, 42)); // true
console.log(deepEquals("hello", "world")); // false
console.log(deepEquals([1, 2, 3], [1, 2, 3])); // true
console.log(deepEquals({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEquals({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEquals({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
