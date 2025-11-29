import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Hearder() {
  const [contact, setcontact] = useState(false);
  const [mobileMenu, setmobileMenu] = useState(false);
  return (
    <>
      <div className="h-[75px] rounded-lg border overflow-hidden  border-white/10 bg-[#1E1E1E] backdrop-blur-lg w-full flex justify-between items-center px-4 md:px-8 fixed">
        {/* LEFT — Logo + Circle */}
        <div className="flex items-center">
          <div className="h-[100%] w-[150px] overflow-hidden justify-center flex">
            <div className="h-[110px] mt-[-20px] w-[110px] border border-white/10 bg-[#848484] backdrop-blur-lg rounded-full flex justify-end items-center"></div>
          </div>
          <div className="w-[100px] items-center flex h-[55px]">
            <Link className="z-0" to='/'>
            <h3 className="text-[#E9E3DC] my-text text-2xl font-extrabold ml-[-105px] z-50">
              AMANI A
            </h3>
            </Link>
            
          </div>
        </div>

        {/* RIGHT — Desktop Menu */}
        <div className="hidden md:flex text-[#E9E3DC] my-text font-extrabold flex gap-7 items-center h-full mr-8">
          <Link to="/project">
            <h3>PROJECTS</h3>
          </Link>

          <Link to="/about">
            <h3>ABOUT</h3>
          </Link>

          <h3
            onClick={() => setcontact(true)}
            className="bg-[#D9D9D9] h-[40px] w-[100px] text-center pt-2.5 text-sm text-[#1E1E1E] cursor-pointer"
          >
            CONTACT
          </h3>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setmobileMenu(!mobileMenu)}
            className="text-[#E9E3DC] text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenu && (
        <div className="md:hidden w-full absolute bg-[#1E1E1E] border border-white/10 rounded-lg top-[75px] py-4 flex flex-col items-end mr-6 text-center gap-4 text-[#E9E3DC] font-bold">
          <Link to="/project" onClick={() => setmobileMenu(false)}>
            <h3 className="text-lg">PROJECTS</h3>
          </Link>

          <Link to="/about" onClick={() => setmobileMenu(false)}>
            <h3 className="text-lg">ABOUT</h3>
          </Link>

          <h3
            onClick={() => {
              setcontact(true);
              setmobileMenu(false);
            }}
            className="bg-[#D9D9D9] h-[40px] w-[100px] text-center pt-2.5 text-sm text-[#1E1E1E] cursor-pointer"
          >
            CONTACT
          </h3>
        </div>
      )}

      {/* CONTACT MODAL */}
      {contact && <Contact contact={setcontact} />}
    </>
  );
}

export default Hearder;
