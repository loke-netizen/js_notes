function rearrangePalindrome(str) {
    str = str.toLowerCase()
    let frequencyMap = {}
    for (const ele of str) {
        frequencyMap[ele] = (frequencyMap[ele] || 0) + 1
    } 
    let oddValues = 0;
    for (const ele of Object.values(frequencyMap)) {

        if (ele%2!==0) {
            oddValues++;
        }
    }
    return oddValues<=1
}
console.log(rearrangePalindrome("lol"));
