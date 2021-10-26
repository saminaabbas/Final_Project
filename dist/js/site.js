
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Which one of the following is a programming language?",
    answer: "HTML",
    options: [
      "HTTP",
      "HTTPS",
      "HTML",
      "FTP"
    ]
  },
  {
    id: 5,
    question: "A group of ……………… bits is commonly called as one byte.",
    answer: "eight",
    options: [
      "six",
      "eight",
      "twelve",
      "fifteen"
    ]
  },
  {
    id: 6,
    question: "Which one is the first fully supported 64-bit operating system",
    answer: "Linux",
    options: [
      "Windows XP",
      "Mac",
      "Linux",
      "Windows Vista"
    ]
  },
 
  {
    id: 7,
    question: "Which computer program converts assembly language to machine language?",
    answer: "Assembler",
    options: [
      "Interpreter",
      "Compiler",
      "Assembler",
      "Debugger"
    ]
  },
  
  {
    id: 8,
    question: " Which type of number system does a computer use to calculate and to store data?",
    answer: "binary",
    options: [
      "hexadecimal",
      "octal",
      "binary",
      "decimal"
    ]
  },
  {
    id: 9,
    question: " Which data structure uses LIFO?",
    answer: "Stack",
    options: [
      "Queue ",
      "Array ",
      "Linked List ",
      "Stack "
    ]
  },
  {
    id: 10,
    question: " A syntax Error is an error ",
    answer: "caused by language rules being broken" ,
    options: [
      "found at the end when the program gives out a wrong value due to logic error",
      "caused by language rules being broken",
      "that you will never find",
      "caused due to user error"
    ]
  },
  {
    id: 11,
    question: "Python is _____ programming language.",
    answer: "high-level",
    options: [
      "beginner level",
      "high-levelr",
      "mid-level",
      "low-level"
    ]
  },
  {
    id: 12,
    question: "WhatsApp concurrent model is implemented using _____ programming language.",
    answer: "Erlang ",
    options: [
      "Java",
      "Node.js",
      "Erlang",
      "C"
    ]
  },
  {
    id:13 ,
    question: " Resolving errors in a program is known as...",
    answer: "Debugging",
    options: [
      "Debugging",
      "Problem solving",
      "Refixing",
      "Error solving"
    ]
  },
 
  
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == 9) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
