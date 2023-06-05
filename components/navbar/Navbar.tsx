'use client';

import Container from "../Container";
import UserMenu from "./UserMenu";
import Logo from "./Logo";

const Navbar = () => {
  
  return ( 
    <div className="absolutefixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-2 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
            sm:gap-0
          "
        >
          <Logo />
          <UserMenu />
        </div>
      </Container>
    </div>
    {/*<Categories />*/}
  </div>
  );
}


export default Navbar;