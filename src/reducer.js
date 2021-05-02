const initialState = {
    hr: new Date().getHours(),
    min: new Date().getMinutes(),
    selectedTime: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HOUR':
            state.hr = new Date().getHours();
            return {...state};
        case 'MINUTES':
            state.min = new Date().getMinutes();
            return {...state};
        case 'ALARMTIME':
            state.selectedTime = action.payload.getHours() + ':' + action.payload.getMinutes();
            return {...state};
        default:
            return state;
    }
}