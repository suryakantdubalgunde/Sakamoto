import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function WatchAnimeSkeleton() {
  const { width } = useWindowDimensions();

  return (
    <div>
      <Wrapper>
        <Skeleton
          height={40}
          baseColor={"#808080"}
          highlightColor={"#404040"}
          style={{
            marginBottom: "1rem",
          }}
        />
        <Skeleton
          baseColor={"#808080"}
          highlightColor={"#404040"}
          style={{
            marginBottom: "1rem",
            aspectRatio: width <= 600 ? "16 / 11" : "16 / 9",
          }}
        />
        <Skeleton
          height={40}
          baseColor={"#808080"}
          highlightColor={"#404040"}
          style={{
            marginBottom: "1rem",
          }}
        />
        <EpisodesWrapper>
          <div className="header">
            <p>Episodes</p>
            <Skeleton
              height={40}
              width={150}
              baseColor={"#808080"}
              highlightColor={"#404040"}
              style={{
                borderRadius: "0.4rem",
              }}
            />
          </div>
          <Episodes>
            {[...Array(20)].map((x, i) => (
              <div key={i}>
                <Skeleton
                  width={width <= 600 ? "5rem" : "10rem"}
                  height={width <= 600 ? 55 : 40}
                  borderRadius={"0.5rem"}
                  baseColor={"#808080"}
                  highlightColor={"#404040"}
                />
              </div>
            ))}
          </Episodes>
        </EpisodesWrapper>
      </Wrapper>
    </div>
  );
}

const Episodes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  }
`;

const EpisodesWrapper = styled.div`
  margin-top: 1rem;
  border: 1px solid #272639;
  border-radius: 0.4rem;

  .header {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    width: 100%;
    border-bottom: 1px solid #404040;
    padding: 0.6rem 1rem;
    justify-content: start;
    align-items: center;
  }

  p {
    font-size: 1.3rem;
    text-decoration: underline;
    color: #FFFFFF;
    font-family: "Gilroy-Medium", sans-serif;
  }
  box-shadow: 0px 4.41109px 20.291px rgba(16, 16, 24, 0.81);
`;

const Wrapper = styled.div`
  margin: 2rem 5rem 2rem 5rem;

  @media screen and (max-width: 600px) {
    margin: 1rem;
  }
`;

export default WatchAnimeSkeleton;
