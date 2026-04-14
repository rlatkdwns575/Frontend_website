// 퀴즈 데이터
const quizData = [
    {
        question: `다음 괄호안에 들어가는 용어의 Full Name 또는 약자는 무엇인가요? 
(   )은/는 비동기적인 웹 애플리케이션의 제작을 위해 JavaScript와 XML을 이용한 비동기적 정보 교환 기법이다.
(   )은/는 필요한 데이터만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리를 할 수 있다. 보통 SOAP이나 XML 기반의 웹 서비스 프로토콜이 사용되며, 웹 서버의 응답을 처리하기 위해 클라이언트 쪽에서는 자바스크립트를 쓴다.
(   )은/는 Google Map과 Google pages에서 사용한 기술에 기반하여 제작되었다.`,
        options: ["UML", "XHR", "AJAX", "JSON"],
        answer: 2
    },
    {
        question: `아래 내용에 해당하는 것은?
- 2 계층(데이터링크 계층)에서 구현되는 터널링 기술 중 하나
- L2F와 PPTP가 결합된 프로토콜로 VPN과 인터넷 서비스 제공자(ISP)가 이용
- IPsec을 함께 사용하면 PPTP보다 훨씬 안전하지만 보안보다 익명화에 더 적합`,
        options: ["IPSEC", "PPTP", "L2TP", "SSL"],
        answer: 2
    },
    {
        question: `아래 내용에서 괄호안에 알맞는 용어를 고르시오.
(    ) 네트워크 상의 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령을 실행하고 다른 시스템으로 파일을 복사할 수 있도록 해주는 응용 프로그램 또는 그 프로토콜을 가리킨다.
(    ) 보안 접속을 통한 rsh, rcp, rlogin, rexec, telnet, ftp 등을 제공하며, IP spoofing (IP스푸핑, 아이피 위/변조 기법중 하나)을 방지하기 위한 기능을 제공한다.
(    ) 기본적으로 포트는 22번이다.`,
        options: ["SSH", "FTP", "HTTP", "HTTPS"],
        answer: 0
    },
    {
        question: `다음 보안 관련 설명으로 괄호안에 알맞는 용어를 고르시오.
(    )은/는 TCP/IP에서 IP 패킷을 처리할 때 발생되는 문제를 알려주는 프로토콜이다.
(    ) 프로토콜은 보통 다른 호스트나 게이트웨이 와 연결된 네트웍에 문제가 있는지 확인하기 위한 목적으로 주로 사용된다.
(    ) 을/를 이용한 공격에는 (    ) Flooding가 있는데 ping 명령어를 통한 (     ) 패킷을 연속적으로 계속 보내어 서버의 요청에 응답으로 인한 다른작업을 하지 못하도록 하는 공격이다.`,
        options: ["TCP", "ICMP", "UDP", "IP"],
        answer: 1
    },
    {
        question: `다음은 디자인 패턴에 관한 설명이다. 설명에 내용에 알맞는 답을 고르시오.
- 다른 무언가와 이어지는 인터페이스 역할을 하는 클래스를 의미한다.
- 실제 객체를 호출하면 행위를 중간에 가로채서 다른 동작을 수행하는 객체로 변경한다.
- 객체를 정교하게 제어해야 하거나 객체 참조가 필요한 경우 사용한다.
- 분리된 객체를 위임함으로써 대리 작업을 중간 단계에 삽입할 수도 있으며 분리된 객체를 동적으로 연결함으로써 객체의 실행 시점을 관리할 수도 있다.`,
        options: ["dispatcher", "decorator", "adapter", "proxy"],
        answer: 3
    }
]

let currentQuestion = 0
let score = 0

const questionCount = document.querySelector("#question-count")
const questionText = document.querySelector("#question")
const optionButtons = document.querySelectorAll(".option-btn")
const feedback = document.querySelector("#feedback")
const nextBtn = document.querySelector("#next-btn")
const quizBox = document.querySelector("#quiz-box")
const resultBox = document.querySelector("#result-box")
const resultScore = document.querySelector("#result-score")
const resultMessage = document.querySelector("#result-message")
const restartBtn = document.querySelector("#restart-btn")

// 배열을 무작위로 섞는 함수 (Fisher-Yates Shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    let current = quizData[currentQuestion]

    questionCount.textContent = `문제 ${currentQuestion + 1} / ${quizData.length}`
    
    // 텍스트 구조화 (첫 줄은 제목, 나머지는 목록)
    const lines = current.question.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    const mainTitle = lines[0];
    const details = lines.slice(1);

    let htmlContent = `<div class="question-title">${mainTitle}</div>`;
    
    if (details.length > 0) {
        htmlContent += `<ul class="question-details">`;
        details.forEach(item => {
            const cleanItem = item.replace(/^-/, '').trim();
            htmlContent += `<li>${cleanItem}</li>`;
        });
        htmlContent += `</ul>`;
    }

    questionText.innerHTML = htmlContent;

    optionButtons.forEach(function(button, index) {
        button.textContent = current.options[index]
        button.className = "option-btn"
        button.dataset.index = index
    })

    feedback.textContent = ""
    nextBtn.style.display = "none"
}

function checkAnswer(selectedIndex) {
    let current = quizData[currentQuestion]
    let correctIndex = current.answer

    optionButtons.forEach(button => button.classList.add("disabled"))
    optionButtons[correctIndex].classList.add("correct")

    if (selectedIndex === correctIndex) {
        score++
        feedback.textContent = "정답입니다!"
        feedback.style.color = "#10b981"
    } else {
        optionButtons[selectedIndex].classList.add("wrong")
        feedback.textContent = "오답입니다! 정답은 표시된 버튼입니다."
        feedback.style.color = "#ef4444"
    }

    nextBtn.style.display = "block"
}

function showResult() {
    quizBox.style.display = "none"
    resultBox.style.display = "block"
    resultScore.textContent = `${score} / ${quizData.length}`
    
    let percentage = (score / quizData.length) * 100
    if (percentage === 100) resultMessage.textContent = "완벽합니다!"
    else if (percentage >= 60) resultMessage.textContent = "잘하셨습니다!"
    else resultMessage.textContent = "다시 도전해보세요!"
}

optionButtons.forEach(button => {
    button.addEventListener("click", () => {
        checkAnswer(Number(button.dataset.index))
    })
})

nextBtn.addEventListener("click", () => {
    currentQuestion++
    if (currentQuestion < quizData.length) {
        showQuestion()
    } else {
        showResult()
    }
})

restartBtn.addEventListener("click", () => {
    currentQuestion = 0
    score = 0
    shuffle(quizData) // 다시 시작할 때도 섞기
    quizBox.style.display = "block"
    resultBox.style.display = "none"
    showQuestion()
})

// 초기 실행 시 문제를 섞고 첫 문제 표시
shuffle(quizData)
showQuestion()