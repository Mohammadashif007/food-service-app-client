import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../PopularMenu/PopularMenu";
import Feature from "../Feature/Feature";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <SectionTitle
                    heading={"---From 11:00am to 10:00pm---"}
                    subHeading={"ORDER ONLINE"}
                ></SectionTitle>
                <Category></Category>
                <PopularMenu></PopularMenu>
                <Feature></Feature>
                <Testimonials></Testimonials>
            </div>
        </HelmetProvider>
    );
};

export default Home;
