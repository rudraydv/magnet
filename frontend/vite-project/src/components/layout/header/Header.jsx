import React from 'react';
import logo from '../../../images/ecom.png';


const Header = () =>{

  return(
    <div class="bg-white antialiased shadow-xl sticky top-0 z-40">
  <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
    <div class="flex items-center justify-between">

      <div class="flex items-center space-x-8">
        <div class="shrink-0">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} class="h-6" alt="Logo" />
    </a>
        </div>

        <ul class="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-4 sm:justify-center">
          <li>
            <a href="/" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700">
              Home
            </a>
          </li>
          <li class="shrink-0">
            <a href="/about" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700">
              About
            </a>
          </li>
          <li class="shrink-0">
            <a href="/products" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700">
              Products
            </a>
          </li>
          <li class="shrink-0">
            <a href="/contact" title="" class="text-sm font-medium text-gray-900 hover:text-primary-700">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div class="flex items-center lg:space-x-2">
       <span className="hidden sm:block"></span>

       

        <a href='/login' class="inline-flex items-center justify-center px-3 py-2 bg-customOrange-tomato hover:bg-customOrange-tomatohover text-xs  font-medium leading-none text-white ">
                      
          Login
        </a>

      

        <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md p-2 text-gray-900 ">
          <span class="sr-only">
            Open Menu
          </span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>                
        </button>
      </div>
    </div>

    <div id="ecommerce-navbar-menu-1" class="bg-gray-50 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
      <ul class="text-gray-900  text-sm font-medium  space-y-3">
        <li>
          <a href="/" class="hover:text-primary-700">Home</a>
        </li>
        <li>
          <a href="/" class="hover:text-primary-700">About</a>
        </li>
        <li>
          <a href="/products" class="hover:text-primary-700">Products</a>
        </li>
        <li>
          <a href="/" class="hover:text-primary-700">Contact</a>
        </li>
        <li className=''>
         
        </li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Header;





// import React from 'react';
// import { ReactNavbar } from 'overlay-navbar';
// import logo from '../../../images/logo.png';
// import { IoSearchSharp } from "react-icons/io5";
// import { FaUserAlt } from "react-icons/fa";
// import { FiShoppingBag } from "react-icons/fi";

// const options = {
//   backgroundColor:"gray",
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "#f0f0f0",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "About",
//   link3Text: "Products",
//   link4Text: "Contact",
//   link1Url: "/",
//   link2Url: "/about",
//   link3Url: "/products",
//   link4Url: "/contact",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
//   searchIcon: true,
//   SearchIconElement: IoSearchSharp,
//   profileIcon: true,
//   ProfileIconElement: FaUserAlt,
//   cartIcon: true,
//   CartIconElement: FiShoppingBag,

  
// };

// const Header = () => {
//   return (
//     <>
//       <ReactNavbar {...options} />
//     </>
//   );
// };

// export default Header;
