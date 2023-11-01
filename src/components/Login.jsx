import React from 'react';
import styled from 'styled-components';

export default function Login() {
    const handleClick = () => {
        const client_id = '35f15000a5f14ba4a411a60e26f0e0a4';
        const redirect_uri = 'http://localhost:3000/';
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
          )}&response_type=token&show_dialog=true`;
    }

  return (
    <Container>
        <img src='./main.jpg' alt='MusicHaven'/>
        <button onClick={handleClick}>Connect MusicHaven</button>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 100vw;
    height: 100vh;
    background-color: #FF8434;
    gap: 2rem;

    img{
        height: 40vh;
    }
    button{
        padding: 1rem 4rem;
        border-radius: 4rem;
        border: none;
        background-color: black;
        color: #FF8434;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;




// http://localhost:3000/#access_token=BQBaiAsfV9M2hOvk7JaD4puRbVW1BXQ8RbaFkNKagFrTsNJ-DwOuZwuGABZ18xjqOBh-tV10iwXpxkRNCnxp9fTVAb5lNY-E6d0UA9yNDQai8saV4DsE5GvlCwyk_fu5ASPf5QZOaKFrRuLGWNhXtpPDpyc7DuPrzGJBxDf-SfwJyPpKezO3CZg2Asw7C_2q9SOm4FYyTEJYci3ZmjucMy4sW_KHrQ&token_type=Bearer&expires_in=3600