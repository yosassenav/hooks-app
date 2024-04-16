import PropTypes from "prop-types";
import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo'}}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
    children: PropTypes.object,
};