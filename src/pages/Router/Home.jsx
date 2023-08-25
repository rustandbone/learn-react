import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
    <Helmet>
      <title>Home - ReactBird</title>
      <meta property="og:title" content="ReactBird" />
      <meta property="twitter:title" content="ReactBird" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://yamoo9.github.io/EUID" /> */}
      <meta property="og:description" content="React 학습을 위한 사이트" />
      {/* <meta property="og:image" content="//yamoo9.github.io/EUID/og-image.jpg" /> */}
      <meta property="og:article:author" content="멋사 프론트엔드 스쿨 6기" />
    </Helmet>
    <div className="grid place-content-center bg-mainCover bg-cover bg-center min-h-[calc(100vh_-_200px)]">
      <h2 className="text-white tracking-widest font-extralight text-4xl uppercase">Shop
        <span className="text-[60px] text-yellow-400">.</span>
      </h2>
    </div>
    </>
  );
}

export default Home;