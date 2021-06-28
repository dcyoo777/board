import 'CSS/SortingBar.css'
import allow from 'imgs/Sorting-bar-allow.png';

function SortingBar() {
    return(
        <div className="Sorting-bar">

            <div className="Select-sorting-bar">
                <div className="Text-select-sorting-bar">
                    조건변경
                </div>
                <img src={allow} className="allow-select-sorting-bar"/>
            </div>


            <div className="Select-status-box">
                <div className="Select-status">
                    최신등록일순
                </div>
            </div>


            <div className="Select-status-box">
                <div className="Select-status">
                    10개씩
                </div>
            </div>

        </div>
    )
}

export default SortingBar;
