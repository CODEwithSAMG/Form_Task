export const initialState = {
    todos: [
        {
            id: 1,
            title: "Event Name",
            data: "Date",
            location: "Location",
            description: "description 1"
        },
        {
            id: 2,
            title: "Category",
            data: "Date",
            location: "Location",
            description: "description 2"
        },
        {
            id: 3,
            title: "Date",
            data: "Date",
            location: "Location",
            description: "description 3"
        },
        {
            id: 4,
            title: "Location",
            data: "Date",
            location: "Location",
            description: "description 4"
        },
        {
            id: 5,
            title: "Description",
            data: "Date",
            location: "Location",
            description: "description 5"
        }
    ]
}

export const todoReducer = (state = initialState, action) => {
    // console.log({
    //     ...state,
    //     todos: [...state.todos, action.payload]
    // })
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}
