
const moodH1 = document.querySelector("h1");
const happyBTN = document.querySelector('#happy-btn');
const sadBTN = document.querySelector('#sad-btn');
const confusedBTN = document.querySelector('#confused-btn');
const clockBTN = document.querySelector('#clock-btn');

happyBTN.addEventListener('click', () => {
    moodStore.dispatch({type: "HAPPY"})
    const state = moodStore.getState()
    moodH1.innerText = state.mood
})

sadBTN.addEventListener('click', () => {
    moodStore.dispatch({type: "SAD"})
    const state = moodStore.getState()
    moodH1.innerText = state.mood
})

confusedBTN.addEventListener('click', () => {
    moodStore.dispatch({type: "CONFUSED"})
    const state = moodStore.getState()
    moodH1.innerText = state.mood
})

clockBTN.addEventListener('click', () => {
    moodStore.dispatch({type: "CLOCK"})
    const state = moodStore.getState()
    moodH1.innerText = state.mood
})