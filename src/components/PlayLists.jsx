import React, {useEffect} from 'react';
import { useStateProvider } from '../util/StateProvider';
import axios from 'axios';
import styled from 'styled-components';
import { reducerCases } from "../util/Constants";

export default function PlayLists() {
    const [{token, playlists}, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlayListData = async() =>{
            const res = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                    },
                }
            );
            const { items } = res.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        }
        getPlayListData();
    }, [token, dispatch]);
    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
      };
    return (
        <Container>
            <ul>
            {playlists.map(({ name, id }) => {
                return (
                    <li key={id} onClick={() => changeCurrentPlaylist(id)}>
                    {name}
                    </li>
                );
            })}
            </ul>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    overflow: hidden;
    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        margin: 0;
        height: 25vh;
        max-height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.6rem;
            &-thumb {
                background-color: rgba(255, 255, 255, 0.333);
            }
            &-thumb:hover {
                background-color: #bebebc;
            }
        }
        li{
            padding-left: 0.5rem;
            font-size: 18px;
            font-family: cursive;
            cursor: pointer;
            border-radius: 1rem;
            &:hover{
                background-color: #1d1b1b;
            }    
        }
    }
`;
