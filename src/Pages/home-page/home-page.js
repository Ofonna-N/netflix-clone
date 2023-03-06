import "./_home-page.scss";
import PlansBanner from "../../components/plans/plans-banner/plans-banner";
import Hero from "../../components/hero/hero";
import MediaSection from "../../components/sections/media section/media-section";
import DeviceAnim from "../../components/animated-graphics/video-frames/device-anim";
import DownloadingGraphic from "../../components/animated-graphics/downloading-graphic/downloading-graph";
import Faq from "../../components/sections/faq section/faq";
import Footer from "../../components/footer/footer";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux-store/userSlice";
function HomePage() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user.email);
        // console.log("user is already logged In");
        dispatch(setUser({ email: user.email }));
        nav("/browse");
      } else {
        console.log("user not logged in");
      }
    });
    return () => unsub();
  }, []);

  return (
    <div className="home-page">
      <PlansBanner />
      <main>
        <Hero />
        <MediaSection
          title={"Enjoy on your TV."}
          subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          graphic={
            <DeviceAnim
              img_src={
                "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              }
              vid_src={
                "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              }
              modifiers={"device-anim--tv"}
            />
          }
        />
        <MediaSection
          title={"Watch everywhere."}
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          modifiers={"media--flipped"}
          graphic={
            <DeviceAnim
              img_src={
                "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              }
              vid_src={
                "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              }
              modifiers={"device-anim--devices"}
            />
          }
        />
        <MediaSection
          title={"Create profiles for kids."}
          subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          graphic={
            <img
              style={{ "margin-top": "1.5rem" }}
              src="https://occ-0-1340-1339.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
            />
          }
        />
        <MediaSection
          title={"Download your shows to watch offline."}
          subtitle="Only available on ad-free plans."
          modifiers={"media--flipped"}
          graphic={<DownloadingGraphic />}
        />
        <Faq />
      </main>
      <Footer isMinimized={false} />
    </div>
  );
}

export default HomePage;
