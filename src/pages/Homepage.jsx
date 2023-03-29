import React, { useState, useEffect } from 'react'
import EntertainmentCard from '../components/Entertainment/EntertainmentCard';
import Herocarouselcom from '../components/HeroCarousel/Herocarouselcom';
import PosterSlider from '../components/PosterSlider/PosterSlider';
import Defaultlayout from '../layout/Defaultlayout';
import axios from 'axios';


const Homepage = () => {

  const [recommendedMovie, setRecommendedMovie] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestToprated = async () => {
      const gettopratedmovie = await axios.get('/movie/top_rated');
      setRecommendedMovie(gettopratedmovie.data.results)
    };

    requestToprated();

  }, [])

  useEffect(() => {
    const requestPopularMovie = async () => {
      const getpopularmovie = await axios.get('/movie/popular');
      setPremierMovies(getpopularmovie.data.results)
    };

    requestPopularMovie();
  }, [])

  useEffect(() => {
    const requestupcoming = async () => {
      const getupcomingmovies = await axios.get('/movie/upcoming');
      setOnlineStreamEvents(getupcomingmovies.data.results)
    };

    requestupcoming();

  }, [])


  return (
    <>
      <Herocarouselcom />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subject="List of recommended movies"
          posters={recommendedMovie}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subject="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Online Streaming Event"
          subject=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  )
}

export default Defaultlayout(Homepage);