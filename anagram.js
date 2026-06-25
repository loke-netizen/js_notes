function anagram(str1,str2){
str1=str1.replace(/\s+/g,"").toLowerCase()
str2=str2.replace(/\s+/g,"").toLowerCase()

if(str1.length!==str2.length){
    return false
}

let chrcounts1={}
let chrcounts2={}
 
for (const ele of str1) {
    chrcounts1[ele]=(chrcounts1[ele]||0)+1
}
for (const ele of str2) {
    chrcounts2[ele]=(chrcounts2[ele]||0)+1
}

for (const key in chrcounts1) {
    if(chrcounts1[key]!==chrcounts2[key])return false 
}
return true
}


console.log(anagram("silent","listen"));
console.log(anagram("rapt","trap"));
console.log(anagram("rast","tras"));
