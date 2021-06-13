import React from 'react'

export default function ListMenu({open}){
    return(
        <ul className = {`${open ? '': 'd-none'}`}>
        <li>Home</li>
        <li>Reading List</li>
        <li>Listings</li>
        <li>Podcast</li>
        <li>Videos</li>
      </ul>
      )
}