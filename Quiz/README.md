# 📝 정보처리기사 실기 퀴즈 앱
정보처리기사 실기 시험의 주요 개념들을 무작위로 풀며 학습할 수 있는 웹 기반 퀴즈 애플리케이션입니다. 현대적인 글래스모피즘 디자인과 사용자 친화적인 인터페이스를 제공합니다.

## ✨ 주요 기능
- 문제 무작위 셔플: Fisher-Yates Shuffle 알고리즘을 사용하여 페이지를 새로고침하거나 다시 풀 때마다 문제 순서가 무작위로 바뀝니다.

- 가독성 중심의 레이아웃: 질문의 메인 제목과 상세 내용을 자동으로 분리하여, 긴 지문도 리스트 형태로 깔끔하게 정렬합니다.

- 실시간 피드백: 정답/오답 여부를 선택 즉시 시각적으로 확인할 수 있으며, 정답인 버튼에 하이라이트 효과를 제공합니다.

- 결과 요약: 모든 문제를 푼 후 전체 점수와 점수대별 맞춤 메시지를 보여줍니다.

- 반응형 디자인: 글래스모피즘(Glassmorphism) 스타일의 세련된 UI를 적용하여 몰입감을 높였습니다.

## 🛠 사용 기술
Frontend: HTML5, CSS3 (Custom Variables, Flexbox, Backdrop-filter)

Script: Vanilla JavaScript (ES6+)

## 📂 파일 구조

```Plaintext
.
├── quiz.html    # 앱의 구조 및 기본 레이아웃
├── style.css    # 글래스모피즘 및 반응형 스타일링
└── app.js       # 퀴즈 로직 (셔플, 문제 렌더링, 정답 체크)
```

## 🚀 시작하기
프로젝트 폴더 내의 모든 파일을 다운로드합니다.

브라우저에서 quiz.html 파일을 엽니다.

문제를 풀고 실력을 점검하세요!

## 💡 코드 특징

### 문제 구조화 로직
질문 텍스트의 첫 줄은 제목으로, 나머지 설명은 상세 리스트로 자동 변환하여 가독성을 극대화했습니다.

```JavaScript
const lines = current.question.split('\n').map(line => line.trim());
const mainTitle = lines[0];
const details = lines.slice(1);
```

### 무작위 섞기 기능
매번 새로운 학습 경험을 위해 배열을 무작위로 섞어주는 로직이 포함되어 있습니다.

```JavaScript
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

주의사항: 본 앱은 학습 보조 도구이며, 최신 시험 범위에 맞춰 quizData를 자유롭게 수정하여 사용할 수 있습니다.
