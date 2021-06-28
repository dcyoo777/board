import 'CSS/NavButton.css'


function NavButton(list, mode){

    /*
    * list => Array
    * mode => enum('main', 'sub')
    * */

    const modes = {'main': 'Nav-text', 'sub': 'Sub-nav-text'}

    return(
        <div style={{float: mode==='sub'?"right":"left", display: "inline"}}>
            {
                list.map((title, index) => (
                    <a key={index} href="#" className="Nav-button">
                        <div className={modes[mode]}>
                            {title}
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default NavButton;
