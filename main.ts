//Question 49:
function loghobies(...hobies: string[]){
    hobies.forEach(hobies=>{
        console.log(`I enjoy ${hobies}`)
    })
}
loghobies("reading", "coding", "travelling")

//Question 50:
let mayday = `My ideal day involves:
1.Wake up early
2.Exersize daily
3.Code daily`
console.log(mayday)

//Question
function calculateArea(width:number, height:number): number{
    return width * height
}

let calculateAreaArrow = (width:number , height:number) : number => width * height

console.log(calculateAreaArrow(8, 4))