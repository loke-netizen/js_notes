function palindrome(str) {
    str = str.toLowerCase()
   
    // for (i = str.length - 1; i >= 0; i--) {
    //     reversestr += str[i]
    // }
     let reversestr = str.split("").reverse().join("")
   console.log(reversestr )
    return reversestr == str


}
console.log(palindrome("lol"));
