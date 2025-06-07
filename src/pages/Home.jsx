import { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import FirstSection from "../features/FirstSection";
import Header from "../features/Header";
import SecondSection from "../features/SecondSection";
import ThirdSection from "../features/ThirdSection";

const Home = () => {
    const sections = ["sec1","sec2","sec3"];
    const [currentIndex,setCurrentIndex] = useState(0);
    const isScrolling = useRef(false);
    // const isScrolled = useRef(null);
    useEffect(()=>{
        const handleWheel = (e) =>{
            if(isScrolling.current) return;
            
            let nextIndex = currentIndex;
            if(e.deltaY > 0 && currentIndex < sections.length -1){
                nextIndex = currentIndex +1;
            } else if(e.deltaY < 0 && currentIndex > 0){
                 nextIndex = currentIndex -1;
            } else return;
            // const targetSection = document.getElementById(sections[nextIndex]);
            // if(targetSection){
                isScrolling.current = true;
                // targetSection.scrollIntoView({behavior:"smooth"}); 이러면 애니메이션 효과없이 순간이동하게됨.
                window.location.hash =`#${sections[nextIndex]}`;
                setCurrentIndex(nextIndex);
             setTimeout(()=>{
                isScrolling.current = false;
            },800);
        }
            // const handleScroll = (e) =>{
            //     clearTimeout(isScrolled.current);
            //     isScrolled.current = setTimeout(()=>{
            //         isScrolling.current = false;
            //     },300)
            // }
        window.addEventListener("wheel",handleWheel);
        // window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("wheel",handleWheel);
            // window.removeEventListener("scroll",handleScroll);
        };
    },[currentIndex])
    return(
        <div className="home-container">
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    )
}
export default Home;