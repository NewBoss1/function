function plus(firstNumber, secundNumber) {
  console.log(firstNumber + secundNumber);
}

//function 밖에서 console.log(firstNumber);를 하면 오류가 난다.
//firstNumber는 function블럭 빡에서 존재할 수 없기 때문이다.

function divide(a, b) {
  console.log(a / b);
}

plus(5, 60);
divide(85, 4);

const player2 = {
  points: 50,
  sayHello: function (player2Name) {
    console.log("Hello " + player2Name + " nice to meet you");
  }
};

console.log(player2);
player2.sayHello("Bee");
player2.sayHello("Yee");
