import React from "react";
import styled from "styled-components";

function ServersList({ episodeLinks, currentServer, setCurrentServer }) {
  const listOfServers = [
    "vidstreaming",
    "streamsb",
    "gogoserver",
    "xstreamcdn",
    "mixdrop",
    "mp4upload",
    "doodstream",
  ];
  return (
    <div>
      <ServerWrapper>
        <div className="server-wrapper">
          <p>Servers List</p>
          <div className="serverlinks">
            {listOfServers.map((server,index) => {
              return (
                episodeLinks[0][server] !== undefined && (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentServer(episodeLinks[0][server]);
                    }}
                    style={
                      currentServer === episodeLinks[0][server]
                        ? {
                            backgroundColor: "#FFFFFF",
                          }
                        : {}
                    }
                  >
                    {server}
                  </button>
                )
              );
            })}
          </div>
        </div>
      </ServerWrapper>
    </div>
  );
}

const ServerWrapper = styled.div`
  p {
    color: #FFFFFF;
    font-size: 1.4rem;
    font-family: "Gilroy-Medium", sans-serif;
    text-decoration: underline;
  }

  .server-wrapper {
    padding: 1rem;
    background-color: #23272A;
    border: 1px solid #808080;
    border-radius: 0.4rem;
    box-shadow: 0px 4.41109px 20.291px rgba(16, 16, 24, 0.81);
  }

  .serverlinks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: space-between;
    margin-top: 1rem;
  }

  button {
    cursor: pointer;
    outline: none;
    color: #FFFFFF;
    background-color: #808080;
    border: 1px solid #404040;
    padding: 0.7rem 1.5rem;
    border-radius: 0.4rem;
    font-family: "Gilroy-Medium", sans-serif;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export default ServersList;