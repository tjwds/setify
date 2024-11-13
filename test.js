import setify from "./index.js";

function runTests() {
  const setA = new Set([1, 2, 3]);
  const setLikeB = setify([2, 3, 4]);
  const setLikeC = setify([1, 2, 3, 4]);
  const setLikeD = setify([1]);
  const setLikeE = setify([4]);

  function assertEqual(actual, expected, description) {
    const actualArray = [...actual];
    const expectedArray = [...expected];
    const result =
      JSON.stringify(actualArray) === JSON.stringify(expectedArray);
    console.log(result ? `✅ ${description}` : `❌ ${description}`);
    if (!result) {
      console.log(`   Expected: ${JSON.stringify(expectedArray)}`);
      console.log(`   Got:      ${JSON.stringify(actualArray)}`);
    }
  }

  assertEqual(
    setA.union(setLikeB),
    new Set([1, 2, 3, 4]),
    "Union of Set and Set-like object"
  );

  assertEqual(
    setA.intersection(setLikeB),
    new Set([2, 3]),
    "Intersection of Set and Set-like object"
  );

  assertEqual(
    setA.difference(setLikeB),
    new Set([1]),
    "Difference of Set and Set-like object"
  );

  assertEqual(
    setA.symmetricDifference(setLikeB),
    new Set([1, 4]),
    "Symmetric Difference of Set and Set-like object"
  );

  console.log(
    setA.isSubsetOf(setLikeC) === true
      ? "✅ isSubsetOf with Set and Set-like object (true case)"
      : "❌ isSubsetOf with Set and Set-like object (true case)"
  );

  console.log(
    setA.isSubsetOf(setLikeB) === false
      ? "✅ isSubsetOf with Set and Set-like object (false case)"
      : "❌ isSubsetOf with Set and Set-like object (false case)"
  );

  console.log(
    setA.isSupersetOf(setLikeD) === true
      ? "✅ isSupersetOf with Set-like object and Set (true case)"
      : "❌ isSupersetOf with Set-like object and Set (true case)"
  );

  console.log(
    setA.isSupersetOf(setLikeB) === false
      ? "✅ isSupersetOf with Set and Set-like object (false case)"
      : "❌ isSupersetOf with Set and Set-like object (false case)"
  );

  console.log(
    setA.isDisjointFrom(setLikeE) === true
      ? "✅ isDisjointFrom with Set and Set-like object (true case)"
      : "❌ isDisjointFrom with Set and Set-like object (true case)"
  );

  console.log(
    setA.isDisjointFrom(setLikeD) === false
      ? "✅ isDisjointFrom with Set-like object and Set (false case)"
      : "❌ isDisjointFrom with Set-like object and Set (false case)"
  );
}

runTests();
