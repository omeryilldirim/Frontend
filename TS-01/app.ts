console.log("Hello World");

const button = document.getElementById("submit")!;
const a = document.getElementById("input1")! as HTMLInputElement;
const b = document.getElementById("input2")! as HTMLInputElement;
const result = document.getElementById("result")!;

function add(a: number, b: number){
    return a + b;
}

button.addEventListener('click', function (){
    console.log('clicked');
    result.innerText = `${add(+a.value, +b.value)}`;
})