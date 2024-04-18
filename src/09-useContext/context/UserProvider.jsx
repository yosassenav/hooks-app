import PropTypes from "prop-types";
import { UserContext } from "./UserContext"

const user = {
  id: 245446,
  name: 'Vanessa',
  email: 'example@google.com'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo', user}}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
    children: PropTypes.array,
};