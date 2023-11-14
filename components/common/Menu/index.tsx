import React from "react";
import Link from "next/link";


type menuItemsType = {
    name:string,
    link:string
}[];
const menuItems:menuItemsType = [
    {
        name: "Accueil",
        link:"/",
    },{
        name: "Notre histoire",
        link:"/",
    },{
        name: "Auderghem par quartier",
        link:"/",
    },{
        name: "Nos carnet",
        link:"/",
    },{
        name: "Contact",
        link:"/",
    },
]
const Menu = () => {
    return (
        <nav>
            <ul className={"flex justify-evenly"}>
                {menuItems.map((item) => (
                    <li key={item.name} className={"flex justify-evenly text-[24px] hover:text-wine"}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                )) }

            </ul>
        </nav>
    )
}
export default Menu;