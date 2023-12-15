import React from 'react'
import { Outlet } from 'react-router-dom'
import "./blog.scss"

export default function Blog() {
    return (
        <div className='blog'>
            <Outlet />
        </div>
    )
}
