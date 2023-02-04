import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const { data: username, password, fname, lname, email } = useFetch('http://ec2-3-22-41-174.us-east-2.compute.amazonaws.com:8000/users/' + id);

  return (
    <div className="user-details">
      { fname && <div>{ fname }</div> }
      { lname && <div>{ lname }</div> }
      { lname && <div>{ email }</div> }
    </div>
  );
}
 
export default UserDetails;