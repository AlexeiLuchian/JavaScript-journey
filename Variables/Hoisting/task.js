let a = 10;
let b = 20;
func();
console.log("[global] a:", a);
console.log("[global] b:", b);

function func() {
    console.log("[func] a:", a);
    console.log("[func] b:", b);
}
