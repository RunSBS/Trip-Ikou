import '../styles/section.css';
const FirstSection = () => {
    return(
        <div id="sec1" className="section-container">
            <div onClick={()=>{
                const target = document.getElementById('sec2');
                target.scrollIntoView({behavior:"smooth"});

            }} className="scroll-indicator">
                <svg className="arrow" width="40" height="40" viewBox="0 0 24 24">
                    <path d="M12 16 l-6 -6 h12z" fill="#333"/>
                </svg>
            </div>
        </div>
    )
}
export default FirstSection;