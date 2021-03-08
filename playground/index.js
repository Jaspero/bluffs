const { Octokit } = require("@octokit/rest");

async function search(phrase) {
  const octokit = new Octokit({
    auth: '',
  });

  await octokit.search.code({
    q: encodeURIComponent(`${phrase} in:file repo:Jaspero/bluffs`)
  })
}

search()
  .then(d => {
    console.log(d);
    process.exit(0)
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
