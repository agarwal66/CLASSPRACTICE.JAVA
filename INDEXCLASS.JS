function numfactorial(n){
    if (n<0){
        return "Error!"
    }
    if (n==0) {
        return 1
    }
    else{
        let factorial =1
        while (n>1){
            factorial=factorial*n
            n = n-1
        }
    return factorial
    }
}
console.log(numfactorial(10))







function product(x,y){
    product = x*y
    return product;
}
console.log(product(1100,1737))


 //1 ques
function sum(x,y){
    add = x+y
    return add;
}
console.log(sum(22,568))
