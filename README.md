# Pairing Katas

Welcome to your first day of Pairing Katas, and your first sprint!

Check out `set-up.md` to get started. If you're on GitHub, there's a link to it above here. If you're on VSCode, find it in the Explorer to the left.

The purpose of these exercises is to practice your TDD skills and to adjust to the idea of properly pair programming.

In your pairs, take turns being driver and navigator. Use git and the command line to handle sharing your repo, and switch to your machine when you switch drivers.

The goal of your tests in to ensure your functions return the correct output when given a range of inputs.

The most important thing to test is that your function functions in the way it should! When you are confident that your function behaves as any reasonable user would expect it to, you should consider **edge cases** where the function may have to deal with extreme, unexpected, unusual or incorrect inputs - but focus on the _'happy path'_ first!

You are testing **'interfaces not implementations'** - you care only about what your function returns when given some input. You should not try to test what exactly is happening inside the function or that people are using it in the correct way, just test that it returns the correct results for a range of different inputs.

## Pairing katas tasks

1. Make sure that you are in the main directory for the repo (the one containing the `package.json`)

2. Run `npm install` to get necessary testing dependencies

3. In your katas folder you will have filenames for each of the functions you need to implement in this sprint.

4. You will also need to create a `<your-function-name-here>.test.js` file inside the katas directory where you can write the test cases for each function and require in the functions that you need to test.

5. Run `npm test` to run every test. Whenever you get one done, swap your pair roles!

6. Below is a suggested order in which to do the katas, but it isn't compulsory to follow it.


- `sumDigits`
- `vegCounter`
- `getFrequencies`
- `alternateCase`
- `caesarCipher`


## Resources

If you'd like a primer on Test Driven Development, read [this blog post by Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).

[What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)

[Using a package.json basics](https://docs.npmjs.com/getting-started/using-a-package.json)

[What is in a package.json file](https://docs.npmjs.com/files/package.json)

[Mocha docs](https://mochajs.org/)

[Chai Documentation](http://chaijs.com/api/bdd/)
