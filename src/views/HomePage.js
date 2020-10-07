import React from "react";
import "../styles/home.css";
import { Banner, Card } from "../components";
import { Button } from "@material-ui/core";

export default function HomePage() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          title="Unique Stays"
          imgUrl="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=1200"
          details="Places which are more than a place to sleep."
        />
        <Card
          title="Online Experience"
          imgUrl="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=1200"
          details="Find unique activities, all without leaving home."
        />
        <Card
          title="Entire home"
          imgUrl="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=1200"
          details="comfortable private places for friends and family."
        />
      </div>
      <div className="home__section">
        <div
          className="home__sectionAction"
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "35px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div style={{ flex: "1 1 auto !important" }}>
            <h2
              style={{ color: "white", fontSize: "2em", marginBottom: "10px" }}
            >
              Explore the world
            </h2>
            <p
              style={{
                lineHeight: "20px",
                fontSize: "16px",
                color: "white",
                maxWidth: "550px",
              }}
            >
              Choose the experience you want. Go where ever your heart takes
              you. Enjoy and take your loved ones with you.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            margin: "0 auto",
          }}
        >
          <Card
            title="Budapest, Hungary"
            imgUrl="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
            details="Take your friends, family or your partner for a surprise."
            price="SEK 250/night"
          />
          <Card
            title="Dubai, UAE"
            imgUrl="https://www.investopedia.com/thmb/7w5Wu1eTyoude82GtYrLbjGiASQ=/2078x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-457978227-ccc2cf15bfbd4deea94491439a0f6cd2.jpg"
            details="Spend a night on the clouds. With a skyscrapper view."
            price="SEK 1300/night"
          />
          <Card
            title="Skäne, Sweden"
            imgUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg"
            details="Outdoors, hug the nature. Take a break."
            price="SEK 400/night"
          />
        </div>
        <Button
          style={{
            margin: "35px auto",
            color: "white",
            fontWeight: "600",
            border: "1px solid white",
            cursor: "pointer",
            padding: "10px 62px",
            borderRadius: "99px",
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
