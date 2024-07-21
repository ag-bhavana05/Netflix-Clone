import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { firebaseAuth } from '../utils/firebase-config';
import { getUserLikedMovies } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Empty from '../components/Empty';

export default function UserLiked() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [email, setEmail] = useState(undefined);
    const navigate = useNavigate();

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null);
    };

    onAuthStateChanged(firebaseAuth, (currentUser)=> {
        if(currentUser) setEmail(currentUser.email);
        else navigate("/login");
    });

    const movies = useSelector((state) => state.netflix.movies);
    const dispatch = useDispatch();

    console.log(email);
    useEffect(() => {
        if(email) {
            dispatch(getUserLikedMovies(email));
        }
    },[email]);

    onAuthStateChanged(firebaseAuth, (currentUser)=> {
        // if(currentUser)   navigate("/");
    });


  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        {movies.length ? 
        
        <div className="grid flex">
            {movies.map((movie, index) => {
                return <Card movieData={movie} index={index} key={movie.id} isLiked={true} />
            })}
        </div>
        : <Empty />
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
.content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
        margin-left: 3rem;
    }
    .grid {
        flex-wrap: wrap;
        gap: 1rem;
    }
}
`;