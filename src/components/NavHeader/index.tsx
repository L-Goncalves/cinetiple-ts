import React, {useState} from 'react';
import './index.scss'
import { Link } from "react-router-dom";
export const Hamburger = () => {
  return (
  <div className="navigation">
    {<div className='line_container'>
      {[ 'line_first',  'line_second',  'line_third'].map( (item, index) => {
        return <div  className={item}></div>;
     })}
    </div>}
  </div> )
}

export const Navbar = () => {
  return (
  <>
  <nav className="navbar">
        <div className='navbar_logo'>
            <img alt='Cinetiple Logo' src={process.env.PUBLIC_URL + "/Logo.svg"} />
        </div>
        <SearchField/>
        <SignInSignUp/>
    </nav>
  </>) 
}

export const NavbarWithSidebar = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
    </>
  
  
  )
   
}

const SearchField = () => {
    return (
    <div className='navbar_search'>
      <input placeholder='Pesquisar' className='navbar_search_input' type={'text'}/>
      <img className='navbar_search_svg' alt='Search Field' src={process.env.PUBLIC_URL + "/Search.svg"}/>
    </div>)
}


const SignInSignUp = () => {
  return (
  <div className='navbar_login_container'>
    <p className='navbar_login_container_sign_up'>Criar Conta</p>
    <div className='navbar_login_container_slash'/>
    <button className='navbar_login_container_login'>Entrar</button>
  </div>)
}

const Sidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  console.log(sidebarOpen)
  return (
    sidebarOpen ? (
    <div className={'sidebar'}>
      <button onClick={ () => setSidebarOpen(!sidebarOpen)} className="sidebar_button">
        <Hamburger/>
      </button>
      <Link to={"/Home"}>
        <Icon customStyle={{marginLeft: "2px", marginTop: '40px' }} url='/HomeActive.svg'/>
      </Link>

      <Link to={'/Marketplace'}>
        <Icon customStyle={{marginLeft: "14px", marginTop: '14px' }} url='/Marketplace.svg'/>
      </Link>
   
      <Link to={"/Blog"}>
      <Icon customStyle={{marginLeft: "14px", marginTop: '14px' }}url='/Blog.svg'/>
      </Link>
      <Link to={"/Cursos"}>
      <Icon customStyle={{marginLeft: "14px", marginTop: '14px' }} url='/Cursos.svg'/>
      </Link>
      <Link to={"/Mais"}>
        <Icon customStyle={{marginLeft: "17px", marginTop: '14px' }} url='/Mais.svg'/>
      </Link>
    </div>): (
      <div className='sidebar_closed'>
       <button onClick={ () => setSidebarOpen(!sidebarOpen)} className="sidebar_button">
        <Hamburger/>
      </button>
        </div>
    ))
} 




const Icon = ({url, customStyle}) => {
  console.log(url)
  return ( 
  <div className='sidebar_icon' >
 <img style={customStyle}
  alt={url}
  src={process.env.PUBLIC_URL + url}
  />
  </div>
 )
 
}

/*
*/
