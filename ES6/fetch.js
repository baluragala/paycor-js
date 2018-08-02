async function getUsers() {
  const users = await fetch("https://api.github.com/users").then(response =>
    response.json()
  );
  for (const user of users) {
    console.log(`Login : ${user.login}`);
    const repos = await fetch(user.repos_url).then(response => response.json());
    for (const repo of repos) {
      console.log(repo.full_name);
    }
    console.log(`****************************************888`);
  }
}

getUsers();
