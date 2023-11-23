import React, { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Order = () => {
    const categories = ["salad", "pizza", "dessert", "soup", "drink"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const todayOffer = menu.filter((item) => item.category === "offered");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salads = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const drinks = menu.filter((item) => item.category === "drinks");
    return (
        <HelmetProvider>
            <Helmet>
                <title>Bistro | Order food</title>
            </Helmet>
            <div>
                <Cover img={orderImg} title="Order Food"></Cover>
                <Tabs
                    defaultIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Drink</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </HelmetProvider>
    );
};

export default Order;
