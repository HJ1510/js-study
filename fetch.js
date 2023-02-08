console.log("start");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

console.log("end");

fetch("http://localhost:8080/hello")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
9;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    return users[0];
  })
  .then((user) => {
    console.log(user);
    const { address } = user;
    return address;
  })
  .then((address) => {
    console.log(address);
    const { geo } = address;
    return geo;
  })
  .then((geo) => {
    console.log(geo);
    const { lat } = geo;
    return lat;
  })
  .then((lat) => {
    console.log(lat);
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const { id } = users[0];
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.text())
      .then((posts) => {
        console.log(posts);
      });
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const { id } = users[0];
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  })
  .then((response) => response.text())
  .then((posts) => {
    console.log(posts);
  });

console.log("---------------------------");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(
    (response) => response.text(),
    (error) => {
      console.log(error);
    }
  )
  .then((result) => {
    console.log(result);
  });

console.log("---------------------------");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // return response.json(); // <- Case(1)
    // return 10; // <- Case(2)
    // // <- Case(3)
    // throw new Error('failed'); // <- Case(4)
  })
  .then((result) => {
    console.log(result);
  });

console.log("---------------------------");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
    throw new Error("test");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("---------------------------");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // throw new Error('too long');
  })
  .then((result) => {
    console.log(result);
    // throw new Error('no required field');
  })
  .catch((error) => {
    console.log(`${error.name}: ${error.message}`);
  });

console.log("---------------------------");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
    throw new Error("error");
  })
  .finally(() => {
    console.log("exit");
  });
console.log("---------------------------");

const p = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("success");
  // }, 2000);
  setTimeout(() => {
    reject(new Error("fail"));
  }, 3000);
});

// p.then((result) => {
//   console.log(result);
// });
p.catch((result) => {
  console.log(result);
});

console.log("---------------------------");

function pick(menus) {
  console.log("Pick random menu!");
  const p = new Promise((resolve, reject) => {
    if (menus.length === 0) {
      reject(new Error("Need Candidates"));
    } else {
      setTimeout(() => {
        const randomIdx = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIdx];
        resolve(selectedMenu);
      }, 1000); // 시간이 걸리는 걸 시뮬레이션하기 위한 1초입니다
    }
  });
  return p;
}

function getRandomMenu() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) => {
      const menus = result;
      return pick(menus); // ! random pick function
    });
}

getRandomMenu()
  .then((menu) => {
    console.log(`Today's lunch is ${menu.name} ~`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Random Menu candidates change everyday");
  });

axios("https://jsonplaceholder.typicode.com/users").then((response) =>
  console.log(response)
);
console.log("---------------------------");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

async function fetchPrint() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await resp.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("exit");
  }
}

fetchPrint();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const lastUser = users[users.length - 1];
    return lastUser.id;
  })
  .then((id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  )
  .then((response) => response.json())
  .then((posts) => {
    const lastPost = posts[posts.length - 1];
    console.log(lastPost);
  });

async function getTheLastPostOfTheLastUser() {
  const userJSON = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await userJSON.json();
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  const postJSON = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const posts = await postJSON.json();
  const lastPost = posts[posts.length - 1];
  return lastPost;
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});

console.log("---------------------------");

async function fetchPrint() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((resp) =>
    resp.text()
  );
}

fetchPrint();

console.log("---------------------------");

const applyPrivacyRule = async function (users) {
  const resultWithRuleApplied = users.map((user) => {
    const keys = Object.keys(user);
    const userWithoutPrivateInfo = {};
    keys.forEach((key) => {
      if (key !== "address" && key !== "phone") {
        userWithoutPrivateInfo[key] = user[key];
      }
    });
    return userWithoutPrivateInfo;
  });

  const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resultWithRuleApplied);
    }, 2000);
  });
  return prm;
};

async function getUsers() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await resp.text();
    const users = JSON.parse(result);
    const resultWithRuleApplied = await applyPrivacyRule(users);
    return resultWithRuleApplied;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("exit");
  }
}

getUsers().then((result) => {
  console.log(result);
});
