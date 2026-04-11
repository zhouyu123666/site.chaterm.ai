# Contributing Guide

Learn how to contribute code, report bugs, and improve documentation for the Chaterm project.

## Ways to Contribute

- **Report Bugs** -- Help us identify and fix issues
- **Discuss Code** -- Participate in technical discussions
- **Submit Fixes** -- Fix bugs and improve existing features
- **Propose Features** -- Suggest new features
- **Improve Documentation** -- Enhance documentation and guides
- **Add Tests** -- Increase test coverage

We use GitHub to host code, track issues and feature requests, and accept Pull Requests. Visit the [Chaterm repository](https://github.com/chaterm/Chaterm) to get started.

### Contributor Workflow

1. Fork this repository to your personal account.
2. Create your development branch from the `main` branch.
3. Develop in your forked repository.
4. Submit a Pull Request to the `main` branch of the original repository when done.
5. Reference the fixed Issue in the PR description (if applicable).
6. After approval from at least one maintainer, the PR will be merged.

## Local Development Environment Setup

1. Clone the repository:

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/Chaterm.git
cd Chaterm
```

2. Install necessary development tools:

   - Install [Node.js](https://nodejs.org/) (recommended to use the latest LTS version)

3. Install Electron:

```bash
  npm i electron -D
```

4. Install project dependencies:

```bash
  node scripts/patch-package-lock.js
  npm install
```

5. Start the development server:

```bash
npm run dev
```

## Project Structure

```
Chaterm/
├── src/
│   ├── main/          # Electron main process
│   ├── preload/       # Preload scripts
│   └── renderer/      # Vue.js frontend
├── scripts/           # Build and development scripts
├── resources/         # Application resources (icons, etc.)
├── tests/            # Test files
└── docs/             # Documentation
```

## Code Quality Standards

### Code Style

- **ESLint** -- JavaScript/TypeScript code checking
- **Prettier** -- Code formatting
- **TypeScript** -- Strong typing recommended

### Quality Checks

```bash
# Format code
npm run format

# Check for code issues
npm run lint

# Type checking
npm run typecheck

# Run tests
npm test

# Build verification
npm run build
```

## PR Guidelines

### What Makes a Great PR

**Clear Purpose**

- Single, focused change
- Clear title and description
- Reference related issues

**High-Quality Code**

- Follow project coding standards
- Include appropriate tests
- Well-commented code
- No breaking changes (unless intentional)

**Documentation**

- Update relevant documentation
- Include usage examples
- Document new features

**Testing**

- Write unit tests for new features
- Write integration tests for complex features
- Manual testing verification

### PR Template

When creating a PR, please include:

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Local tests passed
- [ ] Manual testing completed
- [ ] Screenshots (for UI changes)

## Checklist

- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

### Commit Messages

Use conventional commit format:

```
feat: add new feature
fix: fix bug in component
docs: update README
refactor: improve code structure
test: add unit tests
```

## Getting Help

- **Documentation** -- Check existing documentation first
- **Discussions** -- Ask questions using GitHub Discussions
- **Issues** -- Report bugs via issues with detailed information
- **Ideas** -- Propose feature suggestions via issues

Visit the [Chaterm GitHub repository](https://github.com/chaterm/Chaterm) for all of the above.

## Questions?

If you have any questions about contributing, please create an issue with the "question" label.

## License

By contributing to Chaterm, you agree that your contributions will be licensed under the same terms as the project.
