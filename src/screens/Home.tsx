
import React from 'react'
import Navbar  from '../component/Navbar'


const nItems=[
  {label: "Home", link:"/"},
  {label: "Top Airing", link:"/"},
  {label:"Movies", link:"/"},
  {label:"TV Series", link:"/"},
  {label:"Most Popoular", link:"/"}
]
const Home:React.FC=({}) => {  
  return (
   <Navbar items={nItems}/>
  )
}

export default Home