import { useState, useEffect } from "react";
import { PRODUCTS_URL, CONSUMER_KEY, CONSUMER_SECRET } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import Heading from "../layout/Heading";
import SearchForm from "../forms/SearchForm";
import ProductsList from "../products/ProductsList";

function Overview() {
 
  return (
    <Layout>
      <div className="overview__bg-image"></div>
      <Wrapper cssClass="overview__wrapper">
        <div className="overview__header">
          <Heading size="1">Establishment overview</Heading>
          <SearchForm />
        </div>
        <ProductsList />
      </Wrapper>
    </Layout>
  );
}
export default Overview;
