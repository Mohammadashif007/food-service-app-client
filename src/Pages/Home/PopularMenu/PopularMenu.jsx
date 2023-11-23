import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className="my-20">
            <SectionTitle
                heading={"---From our menu---"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {popular.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <p className=" text-center mt-10">
                {" "}
                <button className="btn btn-outline border-0 border-b-4">
                    Order Now
                </button>
            </p>
        </div>
    );
};

export default PopularMenu;
