var number = 5;

// alert(number);

// var answer = confirm("Есть ли вам 18 лет?");
// var answer = prompt("Есть ли вам 18 лет?");
// console.log(answer);

// var age = [];
// age[0]=prompt("Как ваше имя?");
// age[1]=prompt("Какая ваша фамилия?");
// age[2]=prompt("Сколько вам лет?");
// var quest=[];
// var jobs = ["Как ваше имя?","Сколько вам лет"];

// for(var i = 0; i<jobs.length;i++)
// {
//   quest[i]=prompt(jobs[i]);
// }
function MyFirstApp(name,age,num) {
   
  alert("Привет, меня зовут " + name + " и это моя первая программа");

    function ShowSkills(params) {
      
        var skills = ["Знаю базу html", "Знаю css"];

        for (var i = 0 ; i<skills.length; i++){
        console.log(skills[i]);
      
        }
    }
    ShowSkills();
    function checkAge() {
      if (age<18){
        console.log("Ваш возраст меньше 18")
      }
      else console.log("Ваш возраст больше 18");
      
    }
    checkAge();
    function calcPow(){
      console.log(num*num);
    }
    calcPow();
 
}

MyFirstApp("Влад",20,4);