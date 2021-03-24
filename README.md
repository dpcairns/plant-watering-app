## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## HTML Setup
1) Button
    - Why? On click, add some water
    - How? `addEventListener`
2) Image
    - Why? Give the user feedback about whether they need to add more water
    - How `someImg.src = 'whatever.jpg'`
3) Div
    - Why? Give user written feedback about the plant's health
    - How? `textContent`

## Initialize state
```js
let moistureLevel = 2;
```

## Events:
1) What happens when: user clicks and adds water?
    - We need to incremenet the moisture level state
        - How? `moistureLevel++`
    - We change the image according to the new state
    - We change the text according to the new state
    