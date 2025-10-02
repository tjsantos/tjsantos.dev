import { Octokit } from 'octokit'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, log: console })

octokit.log.debug('Hello, World!')
octokit.log.debug(`Repository: ${process.env.GITHUB_REPOSITORY}`)
octokit.log.debug(`Event name: ${process.env.GITHUB_EVENT_NAME}`)
octokit.log.debug(`Event: ${process.env.GITHUB_EVENT}`)

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

octokit.log.debug(JSON.stringify(pending))

const approval = await octokit.request(
  'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
  {
    owner,
    repo,
    run_id: workflowRunId,
    environment_ids: [161171787],
    state: 'approved',
    comment: 'Automatically approved by github action script.',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  },
)

octokit.log.debug(JSON.stringify(approval))
