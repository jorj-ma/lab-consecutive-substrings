function consecutiveSubstrings(string) {
  const result = []

  // Loop through each starting index
  for (let i = 0; i < string.length; i++) {
    // Loop through each ending index (exclusive)
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j))
    }
  }

  return result
}

// Test cases when running this file directly
if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']")
  console.log("=>", consecutiveSubstrings('abc'))

  console.log("")

  console.log("Expecting: ['a']")
  console.log("=>", consecutiveSubstrings('a'))

  console.log("")

  console.log("Expecting: []")
  console.log("=>", consecutiveSubstrings(''))
}

module.exports = consecutiveSubstrings
