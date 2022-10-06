# How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/singhrishabh93/Hacktoberfest-2022/pulls)

- Take a look at the existing [Issues](https://github.com/singhrishabh93/Hacktoberfest-2022/issues) or [create a new issue](https://github.com/singhrishabh93/Hacktoberfest-2022/issues/new)!
- [Fork the Repo](https://github.com/singhrishabh93/Hacktoberfest-2022/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/singhrishabh93/Hacktoberfest-2022/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

## HOW TO MAKE A PULL REQUEST:

**1.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/Hacktoberfest-2022
```

**2.** Navigate to the newly created LinkFree project directory:

```bash
cd Hacktoberfest-2022
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/singhrishabh93/Hacktoberfest-2022.git
```

**4.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**5.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**6.** Make your changes to the source code.

**7.** Stage your changes and commit:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`. Instead, stage your changes for each file/folder

```bash
git add file/folder
```

```bash
git commit -m "<your_commit_message>"
```

**8.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**9.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**Congratulations!** You've made your first contribution to [**Hacktoberfest-2022**](https://github.com/singhrishabh93/Hacktoberfest-2022/graphs/contributors)! 

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the LinkFree project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

## Run automated tests

After making changes make sure that tests passes

Start the Hacktoberfest-2022 application by previewing the project using the extension Live Server.


## All the best! 👍🏻

<hr class="solid">

<div>

## Note* 👉

## Contributing Guidelines
Thank you for considering contributing to the repository. This guide details all the general information that one should know before contributing to the project. Please stick as close as possible to the guidelines. That way we ensure that you have a smooth experience contributing to this project.

## General Rules :
These are in general rules that you should be following while contributing to an Open Source project :

- Be Nice, Be Respectful (BNBR)
- Check if the Issue you created, exists or not.
- While creating a new issue make sure you describe the issue clearly.
 -Make proper commit messages and document your PR well.
- Always add Comments in your Code and explain it at points, if possible add Doctest.
- Always create a Pull Request from a Branch; Never from the Main.
- Follow proper code conventions because writing clean code is important


Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

</div>