    // Урок 1-2
     // document.write("JavaScript говорит привет!");
    // console.log("JavaScript говорит привет!");
    // console.info("JavaScript говорит привет!");
    // console.error("JavaScript говорит привет!");
    // console.warn("JavaScript говорит привет!");

    // var num;
    // num = 5;

    // Урок 3
    // var num = 67;
    // // conts num = 67;
    // // num = 7; замена переменной
    // console.log( "Переменная: " + num + ".");


    // Урок 4
    // var num = true;
    // var num_1 = 5;
    // var num_2 = "5";

    // Урок 5
// var num_1 = 5;
// var num_2 = 15;

// console.log("Результат:" + (num_1 + num_2));


// var num_3 = 5;
// num_3 +=2;
// // num_3 ++;
// console.log("Результат:" + num_3);


// var  str_1 = Number("12");
// var str_2 = Number("5");
// console.log("Результат:" + (str_1 + str_2));


// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.E);
// console.log("Math: " + Math.sin(30));
// console.log("Math: " + Math.min(1, 2, 25,0, 21));
// console.log("Math: " + Math.max(1, 2, 25,0, 21));

   // Урок 6

//1
    //  var number = 15; 

    //  if (number != 5) {
    //     console.log("ok")
    //  }




//2
    // var number = 15; 

    // if (number != 15) {
    //     console.log("ok")
    //     console.log("ok!")
    // } else {
    //     console.log("Error")
    // }




//3
    // var number = 15; 

    // if (number == 5) {
    //     console.log("ok")
    //     console.log("ok!")
    // }   else if (number < 10) {
    //     console.log("ok")
    // }   else if (number == 7) {
    //     console.log("7!")
    // }   else if (number >=15) {
    //     console.log(">=15!")
    // }   else {
    //     console.log("Error")
    // }




//4
//   var number = 15; 
//   var isHashouse = true

//     if (number == 5 && isHashouse == true) {
//         console.log("ok")
//         console.log("ok!")
//     }   else if (number < 10) {
//         console.log("ok")
//     }   else if (number == 7) {
//         console.log("7!")
//     }   else if (number >=15) {
//         console.log(">=15!")
//     }   else {
//         console.log("Error")
//     }




//5
//  var number = 15; 
//   var isHashouse = true

//     if (number == 5 || !isHashouse) {
//         console.log("ok")
//         console.log("ok!")
//     }   else if (number < 10) {
//         console.log("ok")
//     }   else if (number == 7) {
//         console.log("7!")
//     }   else if (number >=15) {
//         console.log(">=15!")
//     }   else {
//         console.log("Error")
//     }




//6

// var stroka = "45";

// switch (stroka) {
//     case "4":
//         console.log("Переменная со значением 4");
//         break;
//     case "45":
//         console.log("Переменная со значением 45");
//         break;
//     case "5":
//         console.log("Переменная со значением 5");
//         break;
//     case "word":
//         console.log("Переменная со значением <<word>>");
//         break;
//     default:
//         console.log("Default");   
// }



//7

// var arr = [5, true, "stroka", 5.5, 0, -100];
// arr[3] = 67;
// console.log("3 элемент массива: " + (arr[3])); 
// console.log("Длина массива: " + (arr.length));
// console.log("Результат: " + ((arr[3] + arr.length) * arr[0] - arr[5]));

// length //длина


// // многомерные массивы
// var matrix = [
//     [4, 6, 8], ["stroka", 5.7] , [ 0, -100, 20, 67]
// ];

// matrix[2][1] = 90;
// matrix[1][0] = "AZAT Urod шнене пепе фа вата фа кхэ кхэ";
// console.log(matrix);


//8

// for(var i = 100; i>5; i/=2) {
//     console.log(i);
// }

// var j = 0;
// while(j < 10) {
//     console.log(j);
//     j++;
// }

// var j = 1000;
// while(j >= 100) {
//     console.log(j);
//     j-=100;
// }


//бесконечный цикл
// var ishascar = true;
// while(ishascar) {
     
// }


// var x = 0;
// do {
// console.log(x);
// x++;
// } while (x < 10);



// for(var i = 10; i<= 20; i+=2) {
//     if(i >15)
//         break;
//     console.log(i);
// }


// for(var i = 10; i<= 20; i++) {
//     if(i % 2 == 0)
//         continue;

//     console.log(i);
// }


// var arr = [5, 7, 3, 8, 9, 52];

// for (var i = 0; i < arr.length; i++) {
//     arr[1] = 67;
//     arr[i] *= 2;
    

//     console.log("Элемент" + (i + 1) + ":" + arr[i]);
// }


//9

// alert("Какая хорошая погода !");

// confirm("вы сейчас дома ?");


// var data = confirm("Вы сейчас дома?");
// if(data) {
//     alert("Вы молодец!");
// }
 

// var data = prompt("Укажите свой возраст");
// console.log(data);


// var data = prompt("Укажите свой возраст");
// if(data) {
//     console.log(data);
// }else {
//     alert ("ТЫ ЩАС ЧЕ ЗЛИШЬ")
// }


// var person_1, person_2 = null;
// if(confirm("Вы точно уверены?")){
//     person_1 = prompt("Введите ваше имя!");
//     person_2 = prompt("Введите ваш возраст!");
//     alert("Привет, " + person_1 + " ," + " которому " + person_2 + " лет");
// }   else {
//     alert("Зачем отмену нажал чертик")
// }


//10

// function info() {
//     var res = "Давид"
//     console.log( res + " Привет");
//     console.log("!");
// }

// info() *5;



// function info(word) {
//     console.log(word + " !");
// }

// info("Привет");




// function summa(a, b) {
//     var res = a + b;
//     console.log(res + " !")
    
// }

// summa(5, 7);      



// function summa(arr) {
//     var sum = 0;
    
//     for (var i = 0; i < arr.length; i++)
//         sum += arr[i];
//     console.log(sum);

//     //Возвращение значений
//     // return sum;
// }


// var arr = [6, 8, 1];
// var arr_2 = [2, 5, 5, 6];
// var arr_3 = [2, 6, 7, 6];

// summa(arr);
// summa(arr_2);
// summa(arr_3);

// // //Возвращение значений
// // var res = summa(arr);
// // console.log("Результат: " + res);


// //Глобальная переменная
// var num  = 10;

// function info() {
//     // Локальная переменная
//     var num = 10;
//     console.log(num);
// }

// info();


//11

// var counter = 0;

// function OnClickButton () {
//     counter ++;
//     console.log(counter);
//     // alert ("Вы нажали на меня");
// }


// // // счетчик нажатий

var counter = 0 ;

function OnClickButton (pepe) {
    counter ++;
    pepe.innerHTML = "Вы нажали на кнопку: " + counter + " раз";
}

 let startTime, interval;
        let seconds = 0, minutes = 0, hours = 0;
        let running = false;
        const display = document.getElementById('display');

        function update() {
            seconds++;
            if (seconds === 60) { seconds = 0; minutes++; }
            if (minutes === 60) { minutes = 0; hours++; }
            
            display.textContent = 
                (hours < 10 ? "0" + hours : hours) + ":" +
                (minutes < 10 ? "0" + minutes : minutes) + ":" +
                (seconds < 10 ? "0" + seconds : seconds);
        }

        function start() {
            if (!running) {
                interval = setInterval(update, 1000);
                running = true;
            }
        }

        function stop() {
            clearInterval(interval);
            running = false;
        }

        function reset() {
            stop();
            seconds = 0; minutes = 0; hours = 0;
            display.textContent = "00:00:00";
        }
// //Вывод инфы из таблички input
// function onInput (pepe) {
//     if(pepe.value == "Hello")
//         alert("И тебе привет!");
//     console.log(pepe.value);

//     // pepe.style.background = "blue";
//     // pepe.style.color = "red";
//     // pepe.style.cssText = "border-radius: 5px ; border: 0; font-size: 20px";
// }


//12

// var pepe = document.getElementById("fas");
// console.log(pepe.id);
// pepe.title = "New text";
// console.log(pepe.title);


// pepe.style.color = "red";
// pepe.style.backgroundColor = "blue";
// pepe.innerHTML = "New<br>string"


// var spans = document.getElementsByTagName("span");

// // var spans = document.getElementsByClassName("simple");
// for(i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
    
// }


// function checkForm(el) {
//     // console.log("Text");
//     // var name = document.getElementById('name').value;
//     var name = el.name.value;
//     console.log(name);

//     // var pass = document.getElementById('pass').value;
//     var pass = el.pass.value;
//     console.log(pass);

//     var repass = el.repass.value;
//     console.log(repass);

//     var state = el.state.value;
//     console.log(state);

//     return false;
// } 




// document.getElementById("main-form").addEventListener("submit", checkForm);

// function checkForm(event) {
//     event.preventDefault();
//     var el = document.getElementById("main-form");


//     var name = el.name.value;
//     var pass = el.pass.value;
//     var repass = el.repass.value;
//     var state = el.state.value;
  
//     var fail = "";

//     if (name == "" || pass == "" || state == "")
//         fail = "Заполните все поля ";
//     else if (name.length <= 1 || name.length > 40 )
//         fail = "Введите коректное имя";
//     else if (/^[1-9]{1,}$/.test(name))
//         fail = "Введите коректное имя"
//     else if (pass != repass)
//         fail = "Пароли должны совпадать ";
//     else if(pass.split("&").length > 1)
//         fail = "Некорректный символ << & >>";
//     else if(pass.length > 10)
//         fail = "Некорректный пароль";

//     if (fail != "")
//         document.getElementById("error").innerHTML = fail;
//     else {
//         alert("Все данные заполнены корректно");
//         window.location = "https://youtu.be/jKKm-BHJWRA";
//     }
    
// }  