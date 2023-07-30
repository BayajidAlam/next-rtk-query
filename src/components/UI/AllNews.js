import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";
const { Meta } = Card;

const AllNews = ({ allNews }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #TODAY HIGHLIGHT
      </h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {allNews?.map((card) => (
          <Card
            key={card.id}
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={card.image_url} />}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card title"
              description="This is the description"
            />
            <Link href={`/news/${card?.id}`}>
              <p
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                  margin: "10px",
                  padding: "5px",
                  width: "100%",
                }}
              >
                Keep Reading
              </p>
            </Link>
            <p>{card.comment_count}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AllNews;
