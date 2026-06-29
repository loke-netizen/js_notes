function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj

    if (Array.isArray(obj)) {
        let copyArr = []
        for (let i = 0; i < obj.length; i++) {
            copyArr[i] = deepClone(obj[i])
        }
        return copyArr
    }
    let copyObj = {}
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {// because some times it have inherited with another object so checking is important 
            copyObj[key] = deepClone(obj[key])
        }
    }
    return copyObj
}
const obj = {
    name: "Loke",
    age: 21,
    address: {
        city: "Thanjavur",
        pin: 613001
    },
    vehicles: ["bike"]
};
const clone = deepClone(obj)
obj.address.pin = 613006
clone.vehicles.push("cycle")
console.log(obj);
console.log(clone);
