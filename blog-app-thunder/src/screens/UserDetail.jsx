import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserList() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:3000/api/user/:id");
      setUser(res.data.data);
    }
    fetchUser();
  }, []);

  return (
    <div>
      <h2>This is {user.fields?.username}</h2>
      <p>{user.fields.firstName}</p>
      <p>{user.fields.lastName}</p>
      <p>{user.fields.email}</p>
      <p>{user.fields._id}</p>
      <button>Placeholder for edit button</button>
      <button>Placeholder for delete button</button>
    </div>
  )
}
