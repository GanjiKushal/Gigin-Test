function calculateFare(n){
    let cost=0
    let basicFare=40
    let advanceFare=15
    if(n>0){
        if(n>2){
            let i=n-2
            cost=cost+basicFare+i*advanceFare
        }
        else if(n<=2){
            cost=40
        }
        return cost
    }
    else{
        return "Give a valid number to calculate fare"
    }
}
console.log(calculateFare(3))