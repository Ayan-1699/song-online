import React from 'react';
import styled from 'styled-components';
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import PlayLists from './PlayLists';

export default function Sidebar() {
  return (
    <Container>
      <div className="top">
        <div className="logo">
          <img src="./logo1.png" alt="logo" />
          <div className="logoName">
            MusicHaven
          </div>
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Library</span>
          </li>
        </ul>
      </div>
      <PlayLists/>
    </Container>
  )
}

const Container = styled.div`
  background-color: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top{
    display: flex;
    flex-direction: column;
    .logo{
      text-align: center;
      margin: 1rem 0;
      img{
        max-inline-size: 30%;
        block-size: auto;
      }
      .logoName{
        color: #E1E459;
        font-size: 25px;
        font-family: cursive;
      }
    }
    ul{
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem;
      margin-left: 2rem;
      li {
        display: flex;
        font-size: 18px;
        gap: 1rem;
        font-family: cursive;
        cursor: pointer;
        span{
          position: relative;
          bottom: 4px;
        }
        transition: 0.5s ease-in-out;
        &:hover {
          color: white;
        }
      }

    }
  }
`;
