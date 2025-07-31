# Contributing to Atos Digital Academy

First off, thank you for considering contributing to **Atos Digital Academy**! We believe in building a strong, inclusive, and collaborative learning platform and we’re glad to have your support.

This document will guide you through the steps to contribute successfully.

---

## What Can I Contribute?

You can help improve this project in several ways:
- **Documentation:** Improve or add missing docs (README, tutorials, etc.)
- **Bug Reports:** Found something broken? Report it!
- **Feature Requests:** Suggest a new feature or improvement
- **Code Contributions:** Fix bugs, refactor code, or add new features
- **Testing:** Help write or improve test cases

---

## How It Work?

- **Tasks/Contributions are created as issues**
- Each Contributor can **assign or receive an issue**
- A branch is **created from `develop`** for each issue (Always from develop branch)
- Commit messages must reference the issue ID and feature name
- A **pull request** (PR) is made to `develop`
- 1 branch = 1 feature = 1 PR

### Main branches

| Branche | Usage |
|---------|-------|
| `main` | Stable version, ready for production |
| `develop` | Development base (all functionalities converge here) |


### Branch nomenclature

```bash
Type/XX/#ID-feature-name-in-kebab-case
```
| Type        | When to use it                      |
| ----------- | ----------------------------------- |
| `Docs/`     | Documentation related to the project|
| `Feature/`  | New feature                         |
| `Hotfix/`   | Bug fix                             |
| `Refactor/` | Code cleanup or reorganization      |

- XX = contributor's initials
- #ID = GitHub issue id

Examples :

    Feature/ST/#12-add-register-form

    Hotfix/KY/#16-fix-bug-scroll

    Docs/GY/#20-user-guide
---

## Getting Started

### 1. **Fork the Repository**
Click the **Fork** button on the top-right of the repo to create your copy.

### 2. **Clone Your Fork**
```bash
git clone https://github.com/your-username/Atos-Digital-Academy.git
cd Atos-Digital-Academy
```
3. Set Up the Project
Follow the steps in our [README.md](README.md) to install dependencies and run the app locally.

4. Create a New Branch
```bash
git checkout -b Type/XX/#ID-your-feature-name-in-kebab-case
```
5. Make Your Changes
* Write clean, readable, and well-documented code
* Follow the existing coding conventions and structure

6. Commit Your Changes
```bash
git add .
git commit -m "#ID feat: add-feature-name-in-kebab-case or #ID fix: fix-bug-name-in-kebab-case"
```
7. Push to Your Fork
```bash
git push origin Type/XX/#ID-your-feature-name-in-kebab-case
```
8. Create a Pull Request
Go to the original repo and click Compare & pull request. Fill in the PR template with details and submit.
---

## Code Style & Best Practices
* Use clear and descriptive commit messages
* Keep pull requests focused and minimal
* Write unit tests for any new features or fixes
* Lint and format your code (we use [Prettier](https://prettier.io/) and/or ESLint)
---
## Issue Reporting Guidelines
* If you encounter a bug or want to suggest an enhancement:
* Search first to ensure it hasn’t already been reported
* Open a new [GitHub issue](https://github.com/Cypher1305/Atos-Digital-Academy/issues)
* Provide as much context and detail as possible (screenshots, steps to reproduce, logs, etc.)
---
## Code of Conduct
>By participating in this project, you agree to follow our [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md). Let’s create a safe and inclusive environment for everyone.
---
## Thank You
>Your contributions help make Atos Digital Academy better for everyone.
We appreciate your effort and commitment to the community! 
---
