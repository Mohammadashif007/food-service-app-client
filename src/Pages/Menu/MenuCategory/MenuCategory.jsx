import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ item, title, img }) => {
    return (
        <div className=" py-4">
            {title && <Cover title={title} img={img}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-20">
                {item.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            {
              title &&  <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">
                        Order Now
                    </button>
                </Link>
            }
        </div>
    );
};

export default MenuCategory;
