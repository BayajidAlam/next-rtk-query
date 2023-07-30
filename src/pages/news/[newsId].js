import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const style = {
  padding: '20px 0',
};

const NewsDetails = ({news}) => {
  console.log(news);
  return (
    <div>
      <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Image src={news?.image_url} width={500} height={500} alt="news"></Image>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <h1>
            {news?.title}
          </h1>
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch('http://localhost:5000/news')
//   const newses = await res.json()
 
//   const paths = newses?.map((news) => ({
//     params: { newsId: news.id },
//   }))

//   return { paths, fallback: false }
// };



export const getServerSideProps = async (context) => {
  const {params} = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json()

  return {
    props: {
      news: data
    }
  }
};
