//isLoggedIn
export const isLoggedIn = (data) => {
    localStorage.getItem("data")
    if(data == null){
        return false;
    }
    else{
        return true;
    }
}

//doLogin
export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data))
    next()
}

//doLogout
export const doLogout = (next) => {
    localStorage.removeItem("data");
    next()
}

//get currentUser
export const getCurrentUserDetail = () => {
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data"))
    }
    else{
        return false;
    }
}

