import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className=" py-10  bg-gray-800">
        <div className="mb-3 ml-3 ">
            <Logo width="100px" />
        </div>
        <div className='mt-9 ml-3'>
            <p className="text-sm text-gray-600">
                &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
        </div>
    </section>
  )
}

export default Footer