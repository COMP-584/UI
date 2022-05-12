import axios from "axios";

function postUser(userInfo){
    axios.post("user/create", userInfo)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}

function loginUser(userInfo){
    console.log(userInfo)
    axios.post("user/login", userInfo)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}
export default postUser;
export {loginUser};