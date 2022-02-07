
const moodH1 = document.querySelector("h1");
const happyBTN = document.querySelector('#happy-btn');
const sadBTN = document.querySelector('#sad-btn');
const confusedBTN = document.querySelector('#confused-btn');
const clockBTN = document.querySelector('#clock-btn');
const randBTN = document.querySelector('#random-btn');

happyBTN.addEventListener('click', () => {
    moodStore.dispatch({ type: "HAPPY" })
    // const state = moodStore.getState()
    // moodH1.innerText = state.mood
    // not needed anymore b/c of subscribe
})

sadBTN.addEventListener('click', () => {
    moodStore.dispatch({ type: "SAD" })
})

confusedBTN.addEventListener('click', () => {
    moodStore.dispatch({ type: "CONFUSED" })
})

clockBTN.addEventListener('click', () => {
    moodStore.dispatch({ type: "CLOCK" })
})

randBTN.addEventListener('click', () => {
    moodStore.dispatch({ type: "RAND" })
})