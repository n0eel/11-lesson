import { FileImageOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function AddUsers() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [surname, setSuranme] = useState("")
  const [study, setStudy] = useState("")
  const [img, setImg] = useState("")
  const [age, setAge] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const data = {img,name,surname,age,study}

    axios.post("http://localhost:3000/users", data).then(res => {
      toast.success("Successfully")
      setTimeout(() => navigate(-1), 1000);
      console.log("success")
    })
  }

  return (
    <form onSubmit={handleSubmit} className='p-10'>
      <Toaster position="top-center" reverseOrder={false}/>
      <div className='flex justify-between'>
        <h2 className='text-[25px] font-bold'>Add Student</h2>
        <Button htmlType='submit' type='primary' size='large'>Save</Button>
      </div>
      <div className='flex justify-between mt-5'>
        <div className='w-[49%] p-5 rounded-md border-[2px] border-slate-500 space-y-5'>
          <label className='flex flex-col'>
            <span>Name</span>
            <Input value={name} onChange={(e) => setName(e.target.value)} className='mt-1' placeholder='Enter student`s name' size='large'/>
          </label>
          <label className='flex flex-col'>
            <span>Surname</span>
            <Input value={surname} onChange={(e) => setSuranme(e.target.value)} className='mt-1' placeholder='Enter student`s surname' size='large'/>
          </label>
          <label className='flex flex-col'>
            <span>Age</span>
            <Input value={age} onChange={(e) => setAge(e.target.value)} className='mt-1' placeholder='Enter student`s age' size='large' type='number'/>
          </label>
          <label className='flex flex-col'>
            <span>Study place</span>
            <Input value={study} onChange={(e) => setStudy(e.target.value)} className='mt-1' placeholder='Enter student`s study place' size='large' type='text'/>
          </label>
        </div>      
        <div className='w-[49%] p-2 rounded-md border-[2px] border-slate-500'>
          <label className='h-[352px] items-center flex justify-center flex-col'>
            <Input onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} className='hidden' type='file' />
            {img ? <img className='h-[352px] flex justify-center' src={img} alt="Choosen Image"/> :
            <div className='cursor-pointer items-center flex flex-col justify-center'>
              <FileImageOutlined className='scale-[6] mx-auto'/>
              <h2 className='text-[18px] font-semibold mt-[50px]'>Choose Student`s Image</h2>
            </div>}
          </label>
        </div>      
      </div>
    </form>
  )
}

export default AddUsers
