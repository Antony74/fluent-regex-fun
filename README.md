# fluent-regex-fun

This is a small, dependency-free library intended to help you construct regex statements in a fluent and typed way (instead of using cryptic symbols no one fully understands).  

Using Typescript is preferred when using this library since it can help you complete the "fluent-regex-fun" syntax easily.  

This is a fork of Gilly Bar's [fluent-regex](https://github.com/gillyb/fluent-regex) library, which has been modified to be function rather than class-based, and all returned objects should now be immutable.

## Examples

Here are a few examples for you to see the syntax :  

**American phone number:**

    // RegExp syntax
    const r = /(\(\d{3}\)-)?\d{3}-\d{4}/g;

    // fluent-regex-fun syntax
    const r = regexSequence(
        regexSequence("(", RegexLiteral.anyDigit().exactAmount(3), ")-").optional(),
        RegexLiteral.anyDigit().exactAmount(3),
        "-",
        RegexLiteral.anyDigit().exactAmount(4)
    );

**Simple email validation:** *NOTE: This isn't a real valid email check according to the official spec, so don't use this as-is*

    // RegExp syntax
    const r =
        /(\d|[a-zA-Z]|\.|\+|\(|\)){2,}@(\d|[a-zA-Z]|\.|\+|\(|\)){2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?/;

    // fluent-regex syntax
    const r = regexSequence(
        Group.or(
            RegexLiteral.anyDigit(),
            RegexLiteral.anyLetter(),
            ".",
            "+",
            "(",
            ")"
        ).atLeastAmount(2),
        "@",
        Group.or(
            RegexLiteral.anyDigit(),
            RegexLiteral.anyLetter(),
            ".",
           "+",
           "(",
            ")"
        ).atLeastAmount(2),
        ".",
        RegexLiteral.anyLetter().atLeastAmount(2),
        regexSequence(".", RegexLiteral.anyLetter().atLeastAmount(2)).optional()
    );

**Some very simple, other use cases:**  

    // Searching for my first name, and optional last name
    const regex = new RegExp("gilly( barr)?", "i");
    const fluentRegex = regexSequence("gilly", optional(" barr")).toRegex(
        RegexFlags.IGNORE_CASE
    );


    // search for 3 digits in parentheses
    const regex = /\(?[0-9]{3}\)?/;
    const fluentRegex = regexSequence(
        "(",
        RegexLiteral.anyDigit().exactAmount(3),
        ")"
    );

# Installing  
```
npm install fluent-regex-fun
```

# Running tests  
```
npm test
```

# Missing Features (_[Reference](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)_)  
* Matching unicode characters - '\P'
* Special anchors - (except for '^' & '$')
* 'Look ahead' groups
* 'Look behind' groups
* Match as few times as possible - '??'

# Contributing  
All contributions are welcome. Feel free to create a pull request or open an issue.  
If it's a pull request, please try to add some tests with it.  
**Every comment, issue or pull request will be addressed in a polite and friendly manner. :)**  
