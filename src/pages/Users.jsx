import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Users() {
  const navigate = useNavigate()
  const [deleteId, setDeleteId] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios("http://localhost:3000/users").then(res =>  {
      setUsers(res.data)
    })
  }, [])

  function deleteStudent(id) {
    setDeleteId(id);
    const findStudent = users.findIndex(item => item.id === id);
    
    if (findStudent !== -1) {
      users.splice(findStudent, 1);
      setUsers([...users]);
      
      axios.delete(`http://localhost:3000/users/${id}`).then(res => {
        setUsers(users.filter(user => user.id !== id));
      }).catch(err => console.error("Error deleting user:", err));
    }
  }
  

  return (
    <div>
      <div className='p-10 flex justify-between'>
        <h2 className='text-[25px] font-bold text-[#363740]'>Students</h2>
        <Button onClick={() => navigate("add")} size='large' type='primary'>Add Student</Button>
      </div>
      <div className='p-10 flex justify-between flex-wrap gap-10'>
        {users.map(item => <UserCard key={item.id} item={item} deleteStudent={deleteStudent}/>)}
      </div>
    </div>

  )

}
export default Users
