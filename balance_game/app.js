const defaultQuestions = [
    {
        question: "하루 종일 와이파이 없이 살기 vs 하루 종일 배터리 5%로 살기",
        optionA: "하루 종일 와이파이 없이 살기",
        optionB: "하루 종일 배터리 5%로 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 아침만 먹기 vs 평생 저녁만 먹기",
        optionA: "평생 아침만 먹기",
        optionB: "평생 저녁만 먹기",
        countA: 0,
        countB: 0
    },
    {
        question: "여름에 에어컨 없이 살기 vs 겨울에 난방 없이 살기",
        optionA: "여름에 에어컨 없이 살기",
        optionB: "겨울에 난방 없이 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 커피 못 마시기 vs 평생 탄산 못 마시기",
        optionA: "평생 커피 못 마시기",
        optionB: "평생 탄산 못 마시기",
        countA: 0,
        countB: 0
    },
    {
        question: "한 달 동안 유튜브 금지 vs 한 달 동안 게임 금지",
        optionA: "한 달 동안 유튜브 금지",
        optionB: "한 달 동안 게임 금지",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 엘리베이터만 타기 vs 평생 계단만 이용하기",
        optionA: "평생 엘리베이터만 타기",
        optionB: "평생 계단만 이용하기",
        countA: 0,
        countB: 0
    },
    {
        question: "일주일 동안 라면만 먹기 vs 일주일 동안 빵만 먹기",
        optionA: "일주일 동안 라면만 먹기",
        optionB: "일주일 동안 빵만 먹기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 음악 없이 살기 vs 평생 영화 없이 살기",
        optionA: "평생 음악 없이 살기",
        optionB: "평생 영화 없이 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "연애할 때 매일 연락하기 vs 일주일에 한 번만 연락하기",
        optionA: "매일 연락하기",
        optionB: "일주일에 한 번만 연락하기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 치킨만 먹기 vs 평생 피자만 먹기",
        optionA: "평생 치킨만 먹기",
        optionB: "평생 피자만 먹기",
        countA: 0,
        countB: 0
    },
    {
        question: "하루 종일 서 있기 vs 하루 종일 앉아 있기",
        optionA: "하루 종일 서 있기",
        optionB: "하루 종일 앉아 있기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 뜨거운 음식만 먹기 vs 평생 차가운 음식만 먹기",
        optionA: "평생 뜨거운 음식만 먹기",
        optionB: "평생 차가운 음식만 먹기",
        countA: 0,
        countB: 0
    },
    {
        question: "항상 사람들이 많은 곳에서 살기 vs 항상 조용한 시골에서 살기",
        optionA: "항상 사람들이 많은 곳에서 살기",
        optionB: "항상 조용한 시골에서 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 머리 감고 바로 자기 vs 평생 양치 안 하고 자기",
        optionA: "머리 감고 바로 자기",
        optionB: "양치 안 하고 자기",
        countA: 0,
        countB: 0
    },
    {
        question: "하루에 3시간만 자도 멀쩡하기 vs 하루에 12시간 자야 멀쩡하기",
        optionA: "하루 3시간만 자도 멀쩡하기",
        optionB: "하루 12시간 자야 멀쩡하기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 비 오는 날만 살기 vs 평생 눈 오는 날만 살기",
        optionA: "평생 비 오는 날만 살기",
        optionB: "평생 눈 오는 날만 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 책만 보기 vs 평생 영상만 보기",
        optionA: "평생 책만 보기",
        optionB: "평생 영상만 보기",
        countA: 0,
        countB: 0
    },
    {
        question: "친구 100명 있지만 얕은 관계 vs 친구 3명 있지만 깊은 관계",
        optionA: "친구 100명 있지만 얕은 관계",
        optionB: "친구 3명 있지만 깊은 관계",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 매운 음식만 먹기 vs 평생 단 음식만 먹기",
        optionA: "평생 매운 음식만 먹기",
        optionB: "평생 단 음식만 먹기",
        countA: 0,
        countB: 0
    },
    {
        question: "내가 한 말을 모두가 믿기 vs 내가 한 말을 아무도 안 믿기",
        optionA: "내가 한 말을 모두가 믿기",
        optionB: "내가 한 말을 아무도 안 믿기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 샤워는 찬물만 하기 vs 평생 음료는 미지근한 것만 마시기",
        optionA: "평생 샤워는 찬물만 하기",
        optionB: "평생 음료는 미지근한 것만 마시기",
        countA: 0,
        countB: 0
    },
    {
        question: "10년 동안 해외에서 살기 vs 평생 한국에서만 살기",
        optionA: "10년 동안 해외에서 살기",
        optionB: "평생 한국에서만 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 이어폰 없이 살기 vs 평생 배달 없이 살기",
        optionA: "평생 이어폰 없이 살기",
        optionB: "평생 배달 없이 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "항상 솔직해서 상처 주기 vs 항상 배려해서 내 속마음 숨기기",
        optionA: "항상 솔직해서 상처 주기",
        optionB: "항상 배려해서 내 속마음 숨기기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 여행만 다니기 vs 평생 한 곳에 정착해서 살기",
        optionA: "평생 여행만 다니기",
        optionB: "평생 한 곳에 정착해서 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 여름만 사는 것 vs 평생 겨울만 사는 것",
        optionA: "평생 여름만 살기",
        optionB: "평생 겨울만 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "과거로 갈 수 있는 능력 vs 미래로 갈 수 있는 능력",
        optionA: "과거로 갈 수 있는 능력",
        optionB: "미래로 갈 수 있는 능력",
        countA: 0,
        countB: 0
    },
    {
        question: "투명인간 능력 vs 하늘을 나는 능력",
        optionA: "투명인간 능력",
        optionB: "하늘을 나는 능력",
        countA: 0,
        countB: 0
    },
    {
        question: "1억 받고 1년간 스마트폰 없이 살기 vs 지금 그대로 살기",
        optionA: "1억 받고 1년간 스마트폰 없이 살기",
        optionB: "지금 그대로 살기",
        countA: 0,
        countB: 0
    },
    {
        question: "맛있는 걸 먹어도 살이 안 찌는 체질 vs 아무리 자도 피곤하지 않은 체질",
        optionA: "먹어도 살 안 찌는 체질",
        optionB: "아무리 자도 피곤하지 않은 체질",
        countA: 0,
        countB: 0
    },
    {
        question: "세상 모든 동물과 대화할 수 있는 능력 vs 세상 모든 언어를 할 수 있는 능력",
        optionA: "모든 동물과 대화",
        optionB: "모든 언어 구사",
        countA: 0,
        countB: 0
    },
    {
        question: "항상 10분 일찍 도착하기 vs 항상 딱 맞춰 도착하기",
        optionA: "항상 10분 일찍 도착하기",
        optionB: "항상 딱 맞춰 도착하기",
        countA: 0,
        countB: 0
    },
    {
        question: "평생 짜장면만 먹기 vs 평생 짬뽕만 먹기",
        optionA: "평생 짜장면만 먹기",
        optionB: "평생 짬뽕만 먹기",
        countA: 0,
        countB: 0
    },
    {
        question: "절대 거짓말을 못 하기 vs 거짓말을 할 때마다 코가 길어지기",
        optionA: "절대 거짓말 못 하기",
        optionB: "거짓말할 때마다 코 길어지기",
        countA: 0,
        countB: 0
    },
    {
        question: "100년 전으로 가서 살기 vs 100년 후로 가서 살기",
        optionA: "100년 전으로 가서 살기",
        optionB: "100년 후로 가서 살기",
        countA: 0,
        countB: 0
    }
];

function loadQuestions() {
    const saved = localStorage.getItem("balanceQuestions");
    if (saved) {
        return JSON.parse(saved);
    }
    return defaultQuestions;
}

function saveQuestions() {
    localStorage.setItem("balanceQuestions", JSON.stringify(questions));
}

let questions = loadQuestions();
let currentIndex = 0;
let voted = false;

const questionText = document.querySelector("#question-text");
const btnA = document.querySelector("#btn-a");
const btnB = document.querySelector("#btn-b");
const result = document.querySelector("#result");
const nextBtn = document.querySelector("#next-btn");
const optionsBox = document.querySelector(".options");

function showQuestion() {
    const current = questions[currentIndex];

    questionText.textContent = current.question;
    btnA.textContent = current.optionA;
    btnB.textContent = current.optionB;

    result.classList.add("hidden");
    nextBtn.classList.add("hidden");

    btnA.disabled = false;
    btnB.disabled = false;
    voted = false;
}

function vote(choice) {
    if (voted) return;

    const current = questions[currentIndex];

    if (choice === "A") {
        current.countA++;
    } else {
        current.countB++;
    }

    saveQuestions();

    const total = current.countA + current.countB;
    const percentA = Math.round((current.countA / total) * 100);
    const percentB = 100 - percentA;

    result.textContent =
        `${current.optionA} ${percentA}% (${current.countA}표) vs ${current.optionB} ${percentB}% (${current.countB}표)`;

    result.classList.remove("hidden");
    nextBtn.classList.remove("hidden");

    btnA.disabled = true;
    btnB.disabled = true;
    voted = true;
}

btnA.addEventListener("click", function () {
    vote("A");
});

btnB.addEventListener("click", function () {
    vote("B");
});

nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        questionText.textContent = "모든 질문이 끝났습니다!";
        optionsBox.classList.add("hidden");
        result.classList.add("hidden");
        nextBtn.classList.add("hidden");
    }
});

showQuestion();