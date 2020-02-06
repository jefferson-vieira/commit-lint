module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['jira'],
  rules: {
    'jira-commit-message-separator': [2, 'always', ' ']
  }
};
