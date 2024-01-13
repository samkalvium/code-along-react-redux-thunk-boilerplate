import axios from 'axios';


const actionProvider = () =>{
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => dispatch({type: "fetchData", payload: res}));
    };
};


export default actionProvider;