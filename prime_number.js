// prime num code

function isPrime(num){
    let flag=false;
    if(num<=1 || !num){
        flag = false;
    }
    else {
        for(let i=2; i<=num; i++){
            if(num%i==0){
                flag = false;
                break;
            }
            else{
                flag = true;
            }
        }
    }
    if(flag==true){
        console.log(num+" is not a prime Number");
    }
    else{
        console.log(num+" is a prime number");
    }
}

isPrime(13);