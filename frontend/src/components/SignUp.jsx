import React from 'react'

const SignUp = () => {

  const [formData, setFormData] = React.useState({})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
     e.preventDefault()

     

      const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
})
      const result = await response.json()
      console.log(result)
}

  return (
    
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full justify-center items-center' >
      <input onChange={handleChange} className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="text" name="username" id="" placeholder='Name'/>
      <input onChange={handleChange} className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="email" name="email" id="" placeholder='Email ID'/>
      <input onChange={handleChange} className='px-4 py-4 font-inter text-black font-normal border bg-gray-100 focus:outline-none rounded-md xl:w-3/5' type="password" name="password" id="" placeholder='Password'/>
      <button type="submit" className='bg-blue-500 px-14 py-2 rounded-lg xl:text-xl font-inter text-white mt-4'>Sign Up</button>
      </form>
  )
}

export default SignUp
