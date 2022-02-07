const INITIAL_STATE = { mood: 'ಠ⌣ಠ' };

const moodArray = ['ಠ⌣ಠ', '⊙︿⊙', 'ಠ_ಠ', '◴_◶'];
const moodPicker = () => Math.floor(Math.random() * 4);

const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "HAPPY":
            return { ...state, mood: 'ಠ⌣ಠ' };

        case "SAD":
            return { ...state, mood: '⊙︿⊙' }

        case "CONFUSED":
            return { ...state, mood: 'ಠ_ಠ' }

        case "CLOCK":
            return { ...state, mood: '◴_◶' }

        case "RAND":
            return { ...state, mood: moodArray[moodPicker()] }
    }
}

const moodStore = Redux.createStore(moodReducer);

const unsubscribe = moodStore.subscribe(() => {
    const state = moodStore.getState()
    moodH1.innerText = state.mood
    switch (state.mood) {
        case 'ಠ⌣ಠ':
            document.body.style.backgroundColor = 'green'
            break
        case '⊙︿⊙':
            document.body.style.backgroundColor = 'blue'
            break
        case 'ಠ_ಠ':
            document.body.style.backgroundColor = 'teal'
            break
        case '◴_◶':
            document.body.style.backgroundColor = 'purple'
            break
    }
})

'ಠ⌣ಠ'
'⊙︿⊙'
'ಠ_ಠ'
'චᆽච'
'◙‿◙'
'◴_◶'
