import { Link } from "react-router-dom";
import logo from "../../assests/netflixlogo.png";
import BannerAd from "../../component/bannerAd/BannerAd";
import FaqAccordian from "../../component/faqAccordian/FaqAccordian";
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
          <button><Link to='/login'>Sign In</Link></button>
        </div>
      </nav>
      <section className="aboutbannner">
        <div className="landingBannerDetails">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>

          <LandingLogin />
        </div>
      </section>
      <section className="mainBannerAds">
        <BannerAd
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/tv.svg"
          head="Enjoy on your TV"
          para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        />
        <BannerAd
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/popcorn.svg"
          head="Watch everywhere"
          para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <BannerAd
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/crystalball.svg"
          head="Create profiles for kids"
          para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        />
        <BannerAd
          img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/pictogram/download.svg"
          head="Download your shows to watch offline"
          para="Save your favourites easily and always have something to watch."
        />
      </section>
      <section className="faqMain">
        <h1>Frequently Asked Questions</h1>
        <FaqAccordian
          head="What is Netflix ? "
          para1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
"
          para2="You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        />
        <FaqAccordian
          head="How much does Netflix cost ? "
          para1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
          
        />
        <FaqAccordian
          head="Where can I watch ? "
          para1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          para2="You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <FaqAccordian
          head="How do I cancel ? "
          para1="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
         
        />
        <FaqAccordian
          head="What can I watch on Netflix ? "
          para1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          
        />
        <FaqAccordian
          head="Is NetFlix good for kids ? "
          para1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
"
          para2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />
      </section>
      <div className="email-login-second">
        <LandingLogin />
      </div>
      <footer className="landing-footer">
        <p>
          Question Call <span>000-800-919-1694</span>
        </p>
        <div className="footer-link">
          <div>
            <a href="#">FAQ</a>
            <a href="#">Investor Relation</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div>
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookies Preference</a>
            <a href="#">Legal Notice</a>
          </div>
          <div>
            <a href="#">Account </a>
            <a href="#">Way to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div>
            <a href="#">Media Center</a>
            <a href="#">Terme of use</a>
            <a href="#">Contact us</a>
           
          </div>
        </div>

        <select name="" id="">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <p>Netflix India</p>
      </footer>
    </div>
  );
}
