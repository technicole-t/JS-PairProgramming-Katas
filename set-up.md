# Set Up Guide

## Install the necessary extensions

- In VSCode, go to the extensions side panel. It's the bottom icon on the left hand side. If you can't see any icons, click 'Show Activity Bar' in the view menu.
- Install 'Prettier'. This tool will help keep your code better formatted, more readable and prettier.
- You may need to 'reload' after installing for the extension to take effect.

## To get this repo onto your computer

- On the command line, navigate to the folder you want this repo to be in.
- When pairing, one of you should click 'Fork' in the top right of the Northcoders' repo.
- Once you have forked your own version of this repo, both of you should clone that version to your local machine.
- To do this, on the command line type `git clone --single-branch --branch leeds_proposal_02_12_2019 <remote-repo-url>`, replacing the `<remote-repo-url>` with the repo address from your Github account, and press enter.

## To commit your code

- Add the files you want to commit to the staging area by typing `git add` followed by the files and folders you wish to commit (for example, `git add index.js spec`).
- To commit, type `git commit -m 'my beautiful commit message'` followed by a short description of the functionality you have achieved since your last commit.
- Resolve any issues that are preventing you from committing.
- To push to github, type `git push origin master`.

## To pull from a repo your pair has worked on

- Ensure you are in the project git folder on your computer.
- Ensure your pair's push has succeeded.
- Type `git pull origin master` to pull any changes that have been made to your repo.

## Node commands

Make sure you are in your project directory!

- To install dependencies: `npm install`
- To run your tests: `npm test`

You can see what these commands are aliases for by checking your package.json.

## Files in your repository

- _node_modules_ hold all the dependencies / libraries that your project relies on (for example, mocha and chai, for testing).
- _.gitignore_ contains the names of all your files that you don't want committed to github. This includes node_modules, as we don't want to commit tonnes of unnecessary code that we can easily fetch with npm install.
- _package.json_ contains information used by npm to organise your project.
- _package-lock.json_ contains the information needed to link your node modules.
- _README.md_ is instructions for using and running a project! READ IT! Every repo should have one. You can open it in Preview (right click) for a prettier version (using the markdown type formatting).
