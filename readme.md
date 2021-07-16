<div align="center">
    <img src="readme.gif">
    <h1>t a b</h1>
</div>

### What is t a b?

t a b is a minimal esoteric programming language for the 23rd century. It is pretty much the exact same thing as [Small](https://esolangs.org/wiki/Small), but even more arbitrary and harder to read!

### How does it work?

It has 2 commands:

- " " increments the accumulator.
- "   " outputs the accumulator as an ASCII char.

When the accumulator reaches 255, it resets back to 0, and a command is skipped.

### Interpreters and Compilers

t a b has interpreters and compilers written in many different languages, as you can see in this repository. They are pretty simple to create - feel free to contribute one in a language that you are familiar with in a Pull Request!

#### Interpreters (t a b -> text)

- [JavaScript](interpreters/javascript.js)
- [Python](interpreters/python.py)

#### Compilers (text -> t a b)

- [JavaScript](compilers/javascript.js)
- [Python](compilers/python.py)

### Examples

- [Hello World](examples/Hello%20World!)

<sub>See the code's license <a href="license.md">here.</sub>
