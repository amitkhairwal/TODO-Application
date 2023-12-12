let nextToDoId = 0

export const addTodo = (text) => ({  // this action type will try to add a new task to the list
 type: 'ADD_TODO',
 id: nextToDoId++,
 text
})

export const setVisibilityFilter = (filter) => ({  // this action type will set the visibility criteria
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id) => ({  // this action type will set the visibility criteria
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters ={
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}