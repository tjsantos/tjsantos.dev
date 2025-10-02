import { Octokit } from 'octokit'

// Approving pending deployments requires a token with `deployments: write` permission.
// This is not possible using `GITHUB_TOKEN`, so we need a personal access token (PAT).

// Get pending deployments - needs "Actions" repository permissions (read)
// https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#get-pending-deployments-for-a-workflow-run

// Approve pending deployments - needs "Deployments" repository permissions (write)
// https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#review-pending-deployments-for-a-workflow-run

const octokit = new Octokit({ auth: process.env.GH_PAT, log: console })

octokit.log.debug('Hello, World!')
octokit.log.debug(`Repository: ${process.env.GITHUB_REPOSITORY}`)
octokit.log.debug(`Event name: ${process.env.GITHUB_EVENT_NAME}`)
octokit.log.debug(`Event: ${process.env.GITHUB_EVENT}`)

const event = JSON.parse(process.env.GITHUB_EVENT || '{}')
const environmentName = event.deployment.environment
const workflowRunId = event.workflow_run.id
const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/')

octokit.log.debug(
  JSON.stringify({ environmentName, workflowRunId, owner, repo }),
)

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

octokit.log.debug(JSON.stringify(pending, null, 2))

const environmentIds: Array<number> = pending.data
  .filter((d) => d.environment.name === environmentName)
  .map((d) => d.environment.id)
  .filter((id): id is number => Number.isInteger(id)) // type guard to remove undefined

octokit.log.debug(`Environment IDs: ${environmentIds}`)

const approval = await octokit.request(
  'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
  {
    owner,
    repo,
    run_id: workflowRunId,
    environment_ids: environmentIds,
    state: 'approved',
    comment: 'Automatically approved by github action script.',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  },
)

octokit.log.debug(JSON.stringify(approval, null, 2))
