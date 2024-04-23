import PropTypes from "prop-types";
import { UserContext } from "./UserContext"
import { useState } from "react";

// const user = {
//   id: 245446,
//   name: 'Vanessa',
//   email: 'example@google.com'
// }

export const UserProvider = ({children}) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
    children: PropTypes.array,
};