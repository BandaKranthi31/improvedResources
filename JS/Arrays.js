//JS Arrays are Objects
let lang =[]
const arr = ['TypeScript', 'Tailwind']
let num = [2,4,6,8,10]
lang.push('Java')
lang.push('javascript')
lang.push('english')
console.log(lang)
lang.splice(2);
console.log(lang.length)
lang = arr.concat(lang)
console.log(lang)
const Tstarting = lang.filter((item) => item[0] === 'T')
Tstarting.forEach((item) => {
    console.log(item)})
const twoPlusOne = num.map((x) =>x+1)
console.log(twoPlusOne)