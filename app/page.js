import Image from "next/image";
import FeaturedArticles from "./Components/FeaturedArticles/page";
import StockMarket from "./Components/StockMarket/page";
import ArticleGrid from "./Components/ArticalGrid/page";
import PoliticsSection from "./Components/Politics/page";
import LatestTechnology from "./Components/Technology/pag";
import GeustPost from "./Components/GuestPost/Page";

import InfoBoard from "./Components/infoboard/page";

import MergedComponent from "./Components/MustRead/page";
import Newsletter from "./Components/NewsLatter/Page";
import UpdatedNews from "./Components/UpdatedNews.jsx/page";
import Footer from "./Components/Footer/Page";

export default function Home() {
  return (
    <div>
      <FeaturedArticles />
      <InfoBoard />
      <Newsletter />
      <UpdatedNews />
      <StockMarket />
      <LatestTechnology />
      <PoliticsSection />
      <ArticleGrid />
      <GeustPost />
      <MergedComponent />
    </div>
  );
}
