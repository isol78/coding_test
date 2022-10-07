function solution(money) {
//     money / 5500 
//     money % 5500
    
    const coffee = money / 5500;
    // console.log(Math.floor(coffee));
    Math.floor(coffee);
    
    const b = money % 5500;
    // console.log(b);
    
    const array = [];
    array.push(Math.floor(coffee),b);
    // console.log(array);
    return array;
}

// money를 5500원으로 나눈다
// 나머지를 구한다.
// [몫, 나머지]