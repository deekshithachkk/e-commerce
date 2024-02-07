const {  useState, createContext } = require("react");

export const UserContext=createContext();
function AuthContext({children}){
    const [userData,setUserData]=useState({
        billingData:[],
        users:[]
    })
    
    return (
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}
export default AuthContext;