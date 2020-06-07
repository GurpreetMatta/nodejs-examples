console.log('Before');

getUser(1)
  .then(result => getRepositories(result.username))
  .then(result => getCommits(result[0]))
  .then(result => console.log(result))
  .catch(error => console.error(error));

console.log('After');

function getUser(id) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'Gurpreet Matta' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}