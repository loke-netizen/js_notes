function binaryAddition(a, b) {
    a = String(a)
    b = String(b)

    let carry = 0
    let result = ""
    const maxLength = Math.max(a.length, b.length);
    console.log(maxLength);

    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry
        carry = Math.floor(sum / 2)
        result = (sum % 2) + result
    }
    if (carry) result = carry + result;
    return result
}
console.log(binaryAddition("10000", 10000));
