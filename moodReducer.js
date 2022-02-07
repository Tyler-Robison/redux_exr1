const INITIAL_STATE = { mood: 'ಠ⌣ಠ' };

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
    }
}

const moodStore = Redux.createStore(moodReducer);



'ಠ⌣ಠ'
'⊙︿⊙'
'ಠ_ಠ'
'චᆽච'
'◙‿◙'
'◴_◶'
