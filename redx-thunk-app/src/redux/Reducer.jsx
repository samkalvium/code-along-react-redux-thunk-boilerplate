const reducer = (state, action ) => {
    switch (action.type) {
        case "fetchData":
            return{
                data: action.payload
            }
    
        default:
            break;
    }
}

export default reducer