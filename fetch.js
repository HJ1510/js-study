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

fetch("https://learn.codeit.kr/api/interviews/summer")
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter(
      (interviewee) => interviewee.result === "pss"
    );
    return newMembers;
  })
  .then((newMembers) =>
    fetch("https://learn.codeit.kr/api/members", {
      method: "POST",
      body: JSON.stringify(newMembers),
    })
  )
  .then((response) => {
    if (response.status === 200) {
      return fetch("https://learn.codeit.kr/api/members");
    } else {
      throw new Error("New members not added");
    }
  })
  .then((response) => response.json())
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });

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
    throw new Error('error');
  })
  .finally(() => {
    console.log("exit");
  });
