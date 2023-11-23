import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="food"
                />
            </figure>
            <span className="bg-blue-950 text-white text-center py-1 rounded absolute right-0 mt-3 mr-5 w-[3rem]">${price}</span>
            <div className="card-body flex flex-col items-center gap-2">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline border-0 border-[#BB8506] border-b-4">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
