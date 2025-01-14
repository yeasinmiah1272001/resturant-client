import React, { useState } from "react";
import Cover from "../../shared/Cover";
import orderBg from "../../assets/order/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTabs from "./OrderTabs";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Order Page</title>
      </Helmet>
      <Cover title={"Order Page"} image={orderBg} />

      <section>
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="mt-8"
        >
          <TabList className="flex justify-center space-x-4 mb-6">
            <Tab className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 react-tabs__tab--selected:bg-orange-500 react-tabs__tab--selected:text-white">
              SALAD
            </Tab>
            <Tab className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 react-tabs__tab--selected:bg-orange-500 react-tabs__tab--selected:text-white">
              PIZZA
            </Tab>
            <Tab className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 react-tabs__tab--selected:bg-orange-500 react-tabs__tab--selected:text-white">
              SOUPS
            </Tab>
            <Tab className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 react-tabs__tab--selected:bg-orange-500 react-tabs__tab--selected:text-white">
              DESERT
            </Tab>
            <Tab className="px-4 py-2 text-lg font-medium text-gray-700 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 react-tabs__tab--selected:bg-orange-500 react-tabs__tab--selected:text-white">
              DRINKS
            </Tab>
          </TabList>

          <TabPanel className={"border border-b-2 border-gray-600"}>
            <OrderTabs items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={drinks} />
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
