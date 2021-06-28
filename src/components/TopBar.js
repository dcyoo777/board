import logo from "imgs/logo.png";
import NavButton from "components/NavButton";
import {Link} from "react-router-dom";

const mainNavList = ["배팅게임", "경기정보", "커뮤니티", "상점", "새소식"];
const subNavList = ["이용안내", "사이트맵"];

function TopBar() {
    return (
        <div className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" style={{float: "left"}}/></Link>
            {NavButton(mainNavList, 'main')}
            {NavButton(subNavList, 'sub')}
        </div>

    )
};

export default TopBar;
