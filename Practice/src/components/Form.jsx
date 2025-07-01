import React from 'react'

function Form() {
  return (
    <>
    <div className="">

      <form action="">
    < input type="text" placeholder="Enter your name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
      <input type="email" placeholder="Enter your email" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
      <input type="password" placeholder="Enter your password" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
      <input type="submit" value="Submit" className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition duration-300" />
      </form>
    </div>
    </>
  )
}

export default Form