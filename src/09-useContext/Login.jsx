import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const Login = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr/>
      <pre aria-label="data">
        {JSON.stringify(user, null, 3)}
      </pre>
      <button
      className="bn btn-primary"
      onClick={()=>setUser({id:'123', name:'John Doe', email:'johndoe@example.com'})}
      >
        Estlecer usuario
      </button>
    </>
    

  )
}