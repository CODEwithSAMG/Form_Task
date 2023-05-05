export const initialState = {
    todos: [
        {
            id: 1,
            name: "Event Name",
            category: "Sports",
            date: "5 May 2020",
            location: "Gurgaon",
            description: `From Gurgaon`
        },
        {
            id: 2,
            name: "Category",
            category: "School",
            date: "5 May 2023",
            location: "Delhi",
            description: `From Delhi`
        },
        {
            id: 3,
            name: "Date",
            category: "Music",
            date: "5 January 2023",
            location: "Pune",
            description: `From Pune`
        },
        {
            id: 4,
            name: "Location",
            category: "Sports",
            date: "9 December 1999",
            location: "Mumbai",
            description: `From Mumbai`
        },
        {
            id: 5,
            name: "Description",
            category: "Children",
            date: "None",
            location: "Delhi",
            description: "From Delhi"
        }
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, [action.payload]]
            }
        default:
            return state
    }
}
