import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const { data: username, password, fname, lname, email } = useFetch('http://localhost:8000/users/' + id);

  return (
    <div className="user-details">
      { fname && <div>{ fname }</div> }
      { lname && <div>{ lname }</div> }
      { lname && <div>{ email }</div> }
    </div>
  );
}
 
export default UserDetails;