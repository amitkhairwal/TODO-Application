import undoable from "redux-undo"
// for single task
const todo = (state,action) =>{
    switch(action.type)
    {
        case 'ADD_TODO':
            return{
                id: action.id,
                text: action.text,
                completed: false
            }

        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state
            }
            return {
                ...state, completed: !state.completed
            }
        
            default: return state
    }
}
// for multiple tasks
const todos = (state =[],action) =>{
    switch(action.type)
    {
        case 'ADD_TODO':
            return [
                ...state, todo(undefined,action)
            ]

        case 'TOGGLE_TODO':
           return state.map(t => todo(t,action))
        
        default: return state
    }
}

const undoableTodo = undoable(todos)

export default undoableTodo

