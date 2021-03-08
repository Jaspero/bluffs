const { Octokit } = require('@octokit/rest');

async function search(phrase) {
  const octokit = new Octokit({
    auth: '',
  });

  const branch = 'Jaspero/bluffs/tree/playground';
  const path = '/playground/sample';

  const {data} = await octokit.search.code({
    q: `${encodeURIComponent(phrase) || ''}+in:file+org:Jaspero+repo:${branch}+path:${path}`
  });

  return data;
}

search(process.argv[2])
  .then(d => {
    console.log(d);
    process.exit(0)
  })
  .catch(e => {
    console.error(e.errors);
    process.exit(1);
  })
