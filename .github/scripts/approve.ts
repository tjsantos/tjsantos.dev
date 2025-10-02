import { Octokit } from 'octokit'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

console.log('Hello, World!')
console.log(`Repository: ${process.env.GITHUB_REPOSITORY}`)
console.log(`Event name: ${process.env.GITHUB_EVENT_NAME}`)
console.log(`Event: ${process.env.GITHUB_EVENT}`)

const event = JSON.parse(process.env.GITHUB_EVENT || '{}')
const workflowRunId = event.workflow_run.id
const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/')

console.log({ workflowRunId, owner, repo })

const pending = await octokit.request(
  'GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
  {
    owner,
    repo,
    run_id: workflowRunId,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  },
)

console.log({ pending })
