module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['jira'],
  rules: {
    'jira-task-id-empty': [2, 'always', [' ']],
    'jira-commit-message-separator': [2, 'always', [' ']]
  }
};
