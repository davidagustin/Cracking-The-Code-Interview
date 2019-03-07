<h1 align="center">Welcome to my solutions for Cracking the Code Interview</h1>

<h2 align="center">My Interview Notes:</h2>

<h3>Walking through a problem:</h3>

1. Listen: 
Pay very close attention to any information in the problem description. You probably need it all for an optimal 
algorithm
2. Example:
Most examples are too small or are special cases. Debug your example. Is there any way it's a special case? Is it big
enough?
3. Brute Force:
Get a brute-force solution as soon as possible. Don't worry about developing an efficient algorithm and its runtime,
then optimize from there. Don't code yet though!
4. Optimize:
Walk through your brute force with BUD optimization or try some of these ideas:
    - Look for any unused info. You usually need all the information in a problem.
    - Solve it manually on an example, then reverse engineer your thought process. How did you solve it?
    - Solve it 'incorrectly" and then think about why the algorithm fails. Can you fix those issues?
    - Make a time vs. space tradeoff. Hash tables are especially useful!
5. Walk Through:
Now that you have an optimal solution, walk through your approach in detail. Make sure you understand each detail before
you start coding.   
6. Implement:
Your goal is to write beautiful code. Modularize your code from the beginning and refactor to clean up anything that
isn't beautiful.
7. Test:
Test in this order:
    1. Conceptual test. Walk through your code like you would for a detailed code review
    2. Unusual or non-standard code.
    3. Hot spots, like arithmetic and null nodes.
    4. Small test cases. It's much faster than a big test case and just as effective.
    5. Special cases and edge cases.
<p>And when you find bugs, <b>fix them carefully</b></p>

(BUD Optimization: Bottlenecks, Unnecessary Work, Duplicated Work)

<h3>Problem Solving Process:</h3>

1. Specification: Identify valid datatypes and ranges for output and inputs, as well as any side effects on inputs, 
external variable bindings, program environment, or hardware.

2. Justification: In one or two sentences, describe the purpose of calling this function.

3. Explanation: Clearly state the relationship between inputs and outputs. Use plain english to completely explain the
the system's effects and behavior. Don't use any code in your explanation.

4. Visualization: Draw a plan for solving the problem that an engineer would understand. Use pictures and avoid letters
or words (except when labeling things with a name). You may need to show sample data.

5. Approximation: Pseudocode your plan. Each line should be: 
    - Unambiguous
    - A clear step toward the goal
    - Understandable without reading other steps
    - As high level as possible (You'll use helper functions in smaller steps)

6. Verification: Using sample data, walk through your pseudocode plan to verify the plan work as expected (When using 
TDD, you should write a test at this point)

7. Implementation: Turn your pseudocode into real code.

<h3>Whiteboarding Key Pointers:</h3>

O-ICE = <b> Output, Input, Constraints, Edge Cases </b>

Output:
Ask exactly what your algorithm should return.

Input:
Ask exactly what your algorithm will receive to perform work on.

Constraints:
Time and space complexity!!!
Plus other limitations on side-effects.

Edge Cases:
Identify special cases that will need additional consideration in your algorithm.

<h2>Examples of Edge Cases:</h2>
<h3>Numbers:</h3>
- negative values
- duplicate values
- zero values
- all the same values
- all zeros

<h3>Strings:</h3>
- duplicate characters
- non-alphanumeric (!@#$%^&*)
- all the same characters
- empty string

<h3>Arrays:</h3>
- modify the input?
- do we have allocated space for increasing array size?
- empty array

<h2>Sequence of WhiteBoarding:</h2>
O-ICE --> Diagramming --> Pseudocode

Always refer logic to a previous section.

<h3>What Good Coding Looks Like:</h3>

- Correct: The code should operate correctly on all expected and unexpected inputs.
    
- Efficient: The code should operate as efficiently as possible in terms of both time and space. This "efficiency" 
includes both the asymptotic (big O) efficiency and practical real-life efficiency. That is, a constant factor might get
dropped when you compute the big O time, but in real life, it can very much matter.

- Simple: If you can do something in 10 lines instead of 100, you should. Code as quick as possible for a developer to 
write.

- Readable: A different developer should be able to read your code and understand what it does and how does it. Readable
code has comments where necessary, but it implements things in an easily understandable way. That means your fancy code
that does a bunch of bit shifting is not necessarily good code.

- Maintainable: Code should be reasonable adaptable to changes during the life cycle of a product and should be easy to
maintain by other developers, as well as the initial developer.
