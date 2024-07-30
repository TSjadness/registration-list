// "use client";
// import React, { useState } from "react";
// import { HiMenuAlt3, HiHome } from "react-icons/hi"; // Importa o ícone de home
// import { MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
// import Link from "next/link";

// const SideBarMenu = () => {
//   const menus = [
//     { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
//     { name: "Usuário", link: "/pages/employee", icon: AiOutlineUser },
//     { name: "Clientes", link: "/pages/clients", icon: AiOutlineHeart },
//     { name: "outra opção", link: "#", icon: AiOutlineHeart, margin: true },
//     { name: "Configurações", link: "/pages/settings", icon: RiSettings4Line },
//   ];

//   const [open, setOpen] = useState(true);

//   return (
//     <div
//       className={`bg-[#0e0e0e] min-h-screen ${
//         open ? "w-72" : "w-16"
//       } duration-500 text-gray-100 px-4`}
//     >
//       <div className="py-3 flex justify-end">
//         <HiMenuAlt3
//           size={26}
//           className="cursor-pointer"
//           onClick={() => setOpen(!open)}
//         />
//       </div>
//       <div className="pt-8 flex flex-col gap-4 relative">
//         {menus.map((menu, i) => (
//           <Link
//             href={menu.link}
//             key={i}
//             className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
//               menu.margin && "mt-5"
//             }`}
//             aria-label={menu.name}
//           >
//             <div>{React.createElement(menu.icon, { size: "20" })}</div>
//             <h2
//               style={{ transitionDelay: `${i + 3}00ms` }}
//               className={`whitespace-pre duration-500 ${
//                 !open && "opacity-0 translate-x-28 overflow-hidden"
//               }`}
//             >
//               {menu.name}
//             </h2>
//             <h2
//               className={`${
//                 open && "hidden"
//               } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//             >
//               {menu.name}
//             </h2>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SideBarMenu;

"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarMenu = () => {
  const pathname = usePathname(); 
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Usuário", link: "/pages/employee", icon: AiOutlineUser },
    { name: "Clientes", link: "/pages/clients", icon: IoPeopleSharp },
    { name: "Outra Opção", link: "#", icon: SlOptions, margin: true },
    { name: "Configurações", link: "/pages/settings", icon: RiSettings4Line },
  ];

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="pt-8 flex flex-col gap-4 relative">
        {menus.map((menu, i) => {
          const isActive = pathname === menu.link; // Use pathname to check if the menu item is active
          return (
            <Link
              href={menu.link}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                menu.margin ? "mt-5" : ""
              } ${isActive ? "bg-gray-700" : ""}`}
              aria-label={menu.name}
              aria-current={isActive ? "page" : undefined}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open ? "hidden" : ""
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarMenu;

