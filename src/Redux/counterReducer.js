export const counterReducer = (state = 10, action) => {
    switch (action.type) {
        case "Increatement":
            return state += action.payload;
        default:
            return state
    }
}
