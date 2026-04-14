# Frontend_website

HTML, CSS, JavaScript로 제작한 프론트엔드 미니 프로젝트들을 모아둔 저장소입니다.  
간단한 인터랙션 구현부터 DOM 조작, 이벤트 처리, 동적 렌더링, 반응형 UI 구성까지 기본적인 프론트엔드 학습 내용을 프로젝트 단위로 정리했습니다.

## 프로젝트 개요

이 레포지토리는 하나의 대형 애플리케이션보다, 각각의 기능과 UI 목적이 분명한 소규모 웹앱들을 묶어 관리하는 형태로 구성되어 있습니다.  
현재 저장소에는 다음과 같은 프로젝트가 포함되어 있습니다.

- **Quiz**
  - 정보처리기사 실기 학습용 퀴즈 웹앱
  - 문제 셔플, 즉시 정답 확인, 결과 요약 기능 제공

- **Restaurant_list**
  - 나만의 맛집 리스트 관리 웹앱
  - 맛집 추가, 삭제, 개수 표시 기능 제공

- **counter**
  - 숫자를 증가·감소시키는 카운터 웹앱
  - 범위 제한, 색상 변경, 리셋 기능 제공
 
- **claude_opus_frontend**
  - claude opus 4.5 소개 웹사이트
  - 네비게이션 바, 반응형 웹사이트

## 기술 스택

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

## 폴더 구조

```bash
Frontend_website/
├── Quiz/
│   ├── quiz.html
│   ├── style.css
│   ├── app.js
│   └── README.md
├── Restaurant_list/
│   ├── restaurant.html
│   ├── style.css
│   ├── app.js
│   └── README.md
├── counter/
│   ├── counter.html
│   ├── style.css
│   ├── app.js
│   └── README.md
├── claude_opus_frontend/
│   ├── landing.html
│   ├── style.css
│   └── README.md
├── LICENSE
└── README.md
```

## 실행 방법

각 프로젝트는 별도의 빌드 과정 없이 바로 실행할 수 있습니다.

1. 저장소를 클론하거나 다운로드합니다.
2. 원하는 프로젝트 폴더로 이동합니다.
3. 해당 폴더의 HTML 파일을 브라우저에서 열어 실행합니다.

예시:
- `Quiz/quiz.html`
- `Restaurant_list/restaurant.html`
- `counter/counter.html`

## 이 저장소에서 확인할 수 있는 학습 내용

- HTML 기반 화면 구조 설계
- CSS를 활용한 UI 스타일링
- JavaScript를 이용한 DOM 선택 및 조작
- 이벤트 리스너 처리
- 사용자 입력 검증
- 배열 및 객체를 활용한 간단한 상태 관리
- 동적 렌더링
- 기능 단위의 프론트엔드 프로젝트 구성

## 추천 확장 방향

현재 저장소는 프론트엔드 기초 학습용으로 적합하며, 다음과 같은 방향으로 확장할 수 있습니다.

- **LocalStorage**를 활용한 데이터 유지
- 필터링 및 검색 기능 추가
- 다크 모드 적용
- 반응형 UI 개선
- 공통 컴포넌트 스타일 정리
- 프로젝트별 GitHub Pages 배포

## 라이선스

이 저장소는 **MIT License**를 따릅니다.
