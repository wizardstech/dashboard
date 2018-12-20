function filterIssues(issues) {
  const todoIssues = issues.filter((issue) => {
    if (issue.fields.status.name === 'To Do' || issue.fields.status.name === 'Draft') {
      if (!issue.fields.issuetype.subtask) {
        return issue;
      }
    }
    return false;
  });
  const blockedIssues = issues.filter((issue) => {
    if (issue.fields.status.name === 'Blocked' && !issue.fields.issuetype.subtask) {
      return issue;
    }
    return false;
  });
  const doneIssues = issues.filter((issue) => {
    if (issue.fields.status.name === 'Done' && !issue.fields.issuetype.subtask) {
      return issue;
    }
    return false;
  });
  const reviewIssues = issues.filter((issue) => {
    if (issue.fields.status.name === 'In Review' && !issue.fields.issuetype.subtask) {
      return issue;
    }
    return false;
  });
  const tbvIssues = issues.filter((issue) => {
    if (issue.fields.status.name === 'To Be Validated' && !issue.fields.issuetype.subtask) {
      return issue;
    }
    return false;
  });
  const wipIssues = issues.filter((issue) => {
    if (issue.fields.status.name === 'In Progress' && !issue.fields.issuetype.subtask) {
      return issue;
    }
    return false;
  });
  return {
    todo: todoIssues,
    blocked: blockedIssues,
    done: doneIssues,
    review: reviewIssues,
    tbv: tbvIssues,
    wip: wipIssues,
  };
}

export default filterIssues;
