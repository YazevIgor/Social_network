let initialState = {
    dialogsData: [
        {name: "Kolya", id: 1},
        {name: "Vasya", id: 2},
        {name: "Nastya", id: 3},
        {name: "Vika", id: 4}],
    messagesData: [
        {message: "Hi"},
        {message: "How are you?"},
        {message: "I'm fine"}],
    messagesText: ''
};

const messagesReducer = (state = initialState, action) => {

    if (action.type === 'ADD-MESSAGE') {
        let newMessage = {message: state.messagesText};
        return {...state, messagesData: [...state.messagesData, newMessage], messagesText: ''}
    } else if (action.type === 'ADD-DATA-TEXT-MESSAGE') {
        return {...state, messagesText: action.messagesText};
    }
    return state;
}

export const AddMessageCreateAction = () => {
    return {type: 'ADD-MESSAGE'}
}
export const AddMessageTextCreateAction = (text) => {
    return {type: 'ADD-DATA-TEXT-MESSAGE', messagesText: text};
}


export default messagesReducer;