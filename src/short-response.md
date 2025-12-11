# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The bug happens because the variable letter is declared inside each block scope of the if, else if, and else statements using let. In Java script `let` is block- scoped meaning that only one variable exists inside the `{}` where it was created. Even though each branch sets **letter**, once the code leaves those `{}` , the variable doesnt exist anymore. and when the function tries to return

```
"your grade is:" + letter
```

The outer scope has no variable named letter, so it bascially evaluates to undefined.

This is called a scope error, especially when a block-scope variable leak caused by declaring a letter in the wrong scope.

**Part B:**

To fix this we should declare letter once in the parent function scope, than assign it to your condition.

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

The const will log the original setting 50, this happens because newSetting and originalSetting are referencing to the same object in memory. In Javascript objects are mostly passed by references, not by the value. so whe you do:

```
const newSetting = originalSettings;
```

both variables are pointing to the same object.

This also updates originalSetting.volume because they both reference the same memory place.

**Part B:**

To prevent changes to newSetting from affecting the original object, you should create an copy instead of sharing the same reference. A common fix we can use is the `spread operator` which will create a shallow clone.

```
const originalSetting = {volume: 50, brightness: 50};

const newSettings = {...originalSettings};

newSettings.volume = 75;

console.log(originalSettings.volume)
```

Now `newSetting` and `originalSetting` are two different objects, so when trying to edit one does not accidentally edit the other one.

**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

**The value of the product**

On the code the product is the first object in the array.

```
{ name: "Laptop", price: 1000, inStock: true },
```

**what get returned from the first callback**

```
product.instock
```

for the first product the value is `true`

**what happends with the returned value**

.filter keeps only elements where the callback returns a truthy value. Since true was returned, the first product is added to the new array `itemsInStock`
