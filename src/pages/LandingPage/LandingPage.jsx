import logo from "../../assests/netflixlogo.png";
import BannerAd from "../../component/bannerAd/BannerAd";
import LandingLogin from "../../component/landingLogin/LandingLogin";

import "./landingpage.scss";
import { BsGlobe } from "react-icons/bs";
export default function LandingPage() {
  return (
    <div className="landingHeader">
      <nav>
        <img src={logo} alt="" />
        <div className="landingLaguage">
          <select>
            <option value="English">
              <BsGlobe />
              English
            </option>
            <option value="">Hindi</option>
          </select>
          <button>Sign In</button>
        </div>
      </nav>
      <section className="aboutbannner">
        <div className="landingBannerDetails">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <LandingLogin />
        </div>
      </section>
     <section className="mainBannerAds">
     <BannerAd img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/tv.svg' head ='Enjoy on your TV' para='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'/>
     <BannerAd img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/popcorn.svg' head='Watch everywhere' para='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' />
     <BannerAd img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/crystalball.svg' head='Create profiles for kids'para='Send children on adventures with their favourite characters in a space made just for them—free with your membership.' />
     <BannerAd img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/download.svg' head='Download your shows to watch offline' para='Save your favourites easily and always have something to watch.'/>
     </section>
    </div>
  );
}
