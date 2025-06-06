import "../styles/header.css";
const Header = () => {
    return(
        <div className="header-container">
            <div className="wrapper-nav">
                <div className="left"> 
                    <div className="logo">
                        Trip-Ikou
                    </div>
                    <div>
                        탐색
                    </div>
                </div>
                <div className="right">
                    <div className="more-tab">
                        <div>
                            소개
                        </div>
                        <div>
                            비즈니스
                        </div>
                        <div>
                            만들기
                        </div>
                        <div>
                            뉴스
                        </div>
                    </div>
                    <div className="login">
                        <div className="box-red">
                            로그인
                        </div>
                        <div className="box-grey">
                            가입하기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;