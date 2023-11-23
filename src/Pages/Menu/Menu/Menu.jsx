import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const todayOffer = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title> Bistro Boss | Menu </title>
                </Helmet>
                <div>
                    {/* Main cover */}
                    <Cover img={menuImg} title={'OUR MENU'}></Cover>
                    <SectionTitle subHeading={"TODAY'S OFFER"} heading={"---Don't miss---"}></SectionTitle>
                    {/* Menu category */}
                    <MenuCategory item={todayOffer}></MenuCategory>
                    {/* Dessert */}
                    <MenuCategory item={dessert} title={'dessert'} img={dessertImg}></MenuCategory>
                    {/* Pizza */}
                    <MenuCategory item={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
                    {/* Salads */}
                    <MenuCategory item={salads} title={'salads'} img={saladsImg}></MenuCategory>
                    {/* Soup */}
                    <MenuCategory item={soup} title={'soup'} img={soupImg}></MenuCategory>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Menu;
