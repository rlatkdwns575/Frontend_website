// 맛집 데이터를 담을 배열
let restaurants = [];

// HTML 요소 가져오기
let nameInput = document.querySelector("#name-input");
let categorySelect = document.querySelector("#category-select");
let reviewInput = document.querySelector("#review-input");
let addBtn = document.querySelector("#add-btn");
let listContainer = document.querySelector("#restaurant-list");
let countDisplay = document.querySelector("#count");

function createRestaurantCard(restaurant, index) {
  let card = document.createElement("div");
  card.classList.add("restaurant-card");

  // 카드 내용
  let info = document.createElement("div");
  info.classList.add("card-info");
  info.innerHTML = `
    <h3>${restaurant.name}</h3>
    <span class="category">${restaurant.category}</span>
    <div class="review">${restaurant.review}</div>
  `;

  // 삭제 버튼
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", function() {
    restaurants.splice(index, 1);  // 배열에서 제거
    renderList();                  // 화면 다시 그리기
  });

  card.appendChild(info);
  card.appendChild(deleteBtn);
  return card;
}

function renderList() {
  listContainer.innerHTML = "";

  if (restaurants.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; color: #aaa; padding: 40px;">
        아직 등록된 맛집이 없습니다. 첫 번째 맛집을 추가해보세요!
      </div>
    `;
    countDisplay.textContent = "등록된 맛집: 0개";
    return;
  }

  restaurants.forEach(function(restaurant, index) {
    let card = createRestaurantCard(restaurant, index);
    listContainer.appendChild(card);
  });

  countDisplay.textContent = "등록된 맛집: " + restaurants.length + "개";
}

// 페이지 로드 시 초기 상태 표시
renderList();

addBtn.addEventListener("click", function() {
  // 입력값 가져오기
  let name = nameInput.value.trim();
  let category = categorySelect.value;
  let review = reviewInput.value.trim();

  // 빈 값 체크
  if (name === "") {
    alert("맛집 이름을 입력해주세요!");
    nameInput.focus();
    return;
  }

  if (review === "") {
    alert("한 줄 평을 입력해주세요!");
    reviewInput.focus();
    return;
  }

  // 배열에 새 맛집 추가
  restaurants.push({
    name: name,
    category: category,
    review: review
  });

  // 화면 다시 그리기
  renderList();

  // 입력창 비우기
  nameInput.value = "";
  reviewInput.value = "";
  nameInput.focus();
});

// Enter 키 이벤트 (한 줄 평 입력창에서)
reviewInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addBtn.click();  // 추가 버튼의 클릭 이벤트를 실행
  }
});

// 이름 입력창에서도
nameInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});