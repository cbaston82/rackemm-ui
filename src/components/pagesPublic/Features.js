import { useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaPlus } from 'react-icons/fa'
import { Octokit } from 'octokit'
import Button from '../Button'
import CustomLoader from '../CustomeLoader'

const octokit = new Octokit({
    auth: process.env.REACT_GITHUB_ACCESS_TOKEN,
})

function Features() {
    const [issues, setIssues] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProjectIssues = async () => {
            setLoading(true)
            await octokit
                .request('GET /repos/{owner}/{repo}/issues', {
                    owner: 'cbaston82',
                    assignee: 'cbaston82',
                    state: 'open',
                    repo: 'rackemm-public',
                })
                .then((response) => {
                    setLoading(false)
                    setIssues(response.data)
                })
                .catch(() => {
                    setLoading(false)
                })
        }

        getProjectIssues()
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col mb-5 text-center">
                    <h5 className="text-white">
                        Have a feature request? <br />{' '}
                    </h5>

                    <p className="text-white-50 fw-light">
                        All feedback is welcomed, whether its a bug fix or feature request, we would
                        love to hear about it.
                    </p>
                </div>
                {loading ? (
                    <CustomLoader loaderMessage="Fetching issues." color="white" />
                ) : (
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between mb-2 align-items-center">
                            <h5 className="text-white-50 m-0">
                                ({issues.length}) Feature requests / Bug fixes{' '}
                            </h5>
                            <Button
                                className="btn btn-outline-secondary btn-sm"
                                link="https://github.com/cbaston82/rackemm-public/issues"
                            >
                                <span className="d-none d-sm-inline">New Issue</span> <FaPlus />
                            </Button>
                        </div>
                        {issues &&
                            issues.map((issue) => {
                                const milestone = issue.milestone.title.split(' ')[0].toString()
                                return (
                                    <div key={issue.id} className="p-4 mb-3 bg-white">
                                        <span className="fw-bolder text-black">{issue.title}</span>
                                        <span className="fw-light text-black"> - {issue.body}</span>
                                        <div className="d-flex justify-content-between align-items-center mt-0 py-3">
                                            <div>
                                                <span
                                                    className={`badge ${
                                                        issue.state === 'open'
                                                            ? 'text-bg-success'
                                                            : 'text-bg-secondary'
                                                    } mx-1`}
                                                >
                                                    {issue.state}
                                                </span>
                                                {issue.labels.map((label) => (
                                                    <span
                                                        key={label.id}
                                                        className={`badge ${
                                                            label.name === 'feature request'
                                                                ? 'bg-warning'
                                                                : 'bg-danger'
                                                        } mx-1`}
                                                    >
                                                        {label.name}
                                                    </span>
                                                ))}
                                            </div>
                                            <Button
                                                className="btn btn-outline-secondary btn-sm"
                                                buttonText="View Issue"
                                                link={issue.html_url}
                                            >
                                                <FaExternalLinkAlt />
                                            </Button>
                                        </div>
                                        <div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-success"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style={{
                                                        width: milestone,
                                                    }}
                                                />
                                            </div>
                                            <div className="d-md-flex justify-content-between mt-2">
                                                <p className="progress-info text-black-50 fw-light mt-2 fst-italic">
                                                    <span className="fw-bolder text-black">
                                                        Created
                                                    </span>{' '}
                                                    - {new Date(issue.created_at).toLocaleString()}
                                                </p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="text-black-50 fw-light mt-2 fst-italic mx-md-3">
                                                        <span className="fw-bolder text-black">
                                                            Assignee
                                                        </span>{' '}
                                                        -{' '}
                                                        <a
                                                            className="text-decoration-none"
                                                            href={issue.assignee.html_url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {issue.assignee.login}
                                                        </a>
                                                    </p>

                                                    <img
                                                        className=""
                                                        src={issue.assignee.avatar_url}
                                                        height="35"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Features
