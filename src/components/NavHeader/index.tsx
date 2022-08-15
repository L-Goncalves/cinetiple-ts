import { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Blog, Home, Cursos, Marketplace } from "../../assets/svg/index";
export const Hamburger = () => {
  return (
    <div className="navigation">
      {
        <div className="line_container">
          {["line_first", "line_second", "line_third"].map((item) => {
            return <div className={item}></div>;
          })}
        </div>
      }
    </div>
  );
};

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <img
            alt="Cinetiple Logo"
            src={process.env.PUBLIC_URL + "/Logo.svg"}
          />
        </div>
        <SearchField />
        <SignInSignUp />
      </nav>
    </>
  );
};

export const NavbarWithSidebar = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

const SearchField = () => {
  return (
    <div className="navbar_search">
      <input
        placeholder="Pesquisar"
        className="navbar_search_input"
        type={"text"}
      />
      <img
        className="navbar_search_svg"
        alt="Search Field"
        src={process.env.PUBLIC_URL + "/Search.svg"}
      />
    </div>
  );
};

const SignInSignUp = () => {
  return (
    <div className="navbar_login_container">
      <p className="navbar_login_container_sign_up">Criar Conta</p>
      <div className="navbar_login_container_slash" />
      <button className="navbar_login_container_login">Entrar</button>
    </div>
  );
};

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tabActive, SetTabActive] = useState("Home");
  return (
    <div className={sidebarOpen ? "sidebar" : "sidebar_closed"}>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={sidebarOpen ? "sidebar_button" : "sidebar_button_closed"}
      >
        <Hamburger />
      </button>
      <Link
        to={"/Home"}
        onClick={() => {
          SetTabActive("Home");
        }}
      >
        {tabActive.includes("Home") ? (
          <Home
            fill={"orangered"}
            className="sidebar_icon"
            style={{ marginLeft: "23px", marginTop: "30px" }}
          />
        ) : (
          <Home
            fill={"#FFF"}
            className="sidebar_icon"
            style={{ marginLeft: "23px", marginTop: "30px" }}
          />
        )}
      </Link>

      <Link
        to={"/samplepack"}
        onClick={() => {
          SetTabActive("Marketplace");
        }}
      >
        {tabActive.includes("Marketplace") ? (
          <Marketplace
            fill={"orangered"}
            className="sidebar_icon"
            style={{ marginLeft: "25px", marginTop: "20px" }}
          />
        ) : (
          <Marketplace
            fill={"#FFF"}
            className="sidebar_icon"
            style={{ marginLeft: "25px", marginTop: "20px" }}
          />
        )}
      </Link>

      <Link
        to={"/samplepack"}
        onClick={() => {
          SetTabActive("Blog");
        }}
      >
        {tabActive.includes("Blog") ? (
          <Blog
            fill={"orangered"}
            className="sidebar_icon"
            style={{ marginLeft: "25px", marginTop: "30px" }}
          />
        ) : (
          <Blog
            fill={"#FFF"}
            className="sidebar_icon"
            style={{ marginLeft: "25px", marginTop: "30px" }}
          />
        )}
      </Link>
      <Link
        to={"/Cursos"}
        onClick={() => {
          SetTabActive("Cursos");
        }}
      >
        {tabActive.includes("Cursos") ? (
          <Cursos
            fill={"orangered"}
            className="sidebar_icon"
            style={{ marginLeft: "25px", marginTop: "30px" }}
          />
        ) : (
          <Cursos
            fill={"#FFF"}
            className="sidebar_icon"
            style={{ marginLeft: "25px", marginTop: "30px" }}
          />
        )}
      </Link>
    </div>
  );
};

/*
 */
