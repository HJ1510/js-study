/* fetch('https://learn.codeit.kr/api/topics')
    .then((response) => response.text())
    .then((result) => { console.log(result) }) */

// 일단 이 코드를 주석 해제하고, 아래 코드를 주석 처리해서 어떤 JSON 데이터가 오는지 확인하세요

fetch("https://learn.codeit.kr/api/topics")
  .then((response) => response.text())
  .then((result) => {
    const topics = JSON.parse(result); // 여기에 코드를 작성하세요
    const beginnerLevelTopics = topics.filter(
      (topic) => topic.difficulty === "초급"
    );
    console.log(beginnerLevelTopics);
  });

fetch("https://learn.codeit.kr/api/topics")
  .then((response) => response.text())
  .then((result) => {
    const topics = JSON.parse(result);
    console.log(topics[0].keyword);
    console.log(topics[1].keyword);
    console.log(topics[2].keyword);
  });

fetch("https://learn.codeit.kr/api/topics")
  .then((response) => response.json())
  .then((topics) => {
    console.log(topics[0].keyword);
    console.log(topics[1].keyword);
    console.log(topics[2].keyword);
  });

fetch("https://learn.codeit.kr/api/topics")
  .then((response) => response.text())
  .then((result) => {
    const articles = JSON.parse(result); // 여기에 코드를 작성하세요
    console.log(articles);
  });

// fetch('https://learn.codeit.kr/api/members/4')
//   .then((response) => response.text())
//   .then((result) => { console.log(result); })

const newMember = {
  name: "Micole",
  email: "mc@gmail.com",
  department: "sales",
};

fetch("https://learn.codeit.kr/api/members", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

const member = {
  name: "Alice",
  email: "alice@codeitmall.kr",
  department: "marketing",
};

fetch("https://learn.codeit.kr/api/members/2", {
  method: "PUT",
  body: JSON.stringify(member),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

fetch("https://learn.codeit.kr/api/members/2", {
  method: "DELETE",
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

const formData = new FormData();
formData.append("email", email.value);
formData.append("password", password.value);
formData.append("nickname", nickname.value);
formData.append("profile", image.files[0], "me.png");

fetch("https://learn.codeit.kr/api/members", {
  method: "POST",
  body: formData,
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
