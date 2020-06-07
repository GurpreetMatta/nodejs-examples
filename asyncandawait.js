console.log('Before');

async function display() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.username);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log(error);
    }
}
display();
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