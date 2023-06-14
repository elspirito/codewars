function solution(str){
    const arr = [...str];
    let reverse = "";
    while(arr.length) {
        reverse = reverse + arr.pop();
    }
    return reverse;
}