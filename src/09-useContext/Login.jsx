import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const Login = () => {

  const {user} = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr/>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="bn btn-primary">Estlecer usuario</button>
    </>
    

  )
}
