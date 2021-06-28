import React, { useState } from "react";

import 'CSS/WriteNewContent.css'
import {Link} from "react-router-dom";


function WriteNewContent() {


    const [ title, onChangeTitle ] = useState( '' );
    const [ content, onChangeContent ] = useState( '' );


    function createNewContent() {
        const now = new Date();
        let temp = [];
        if(localStorage.datas !== undefined){
            temp = JSON.parse( localStorage.datas );
        }

        let nextNumber = 1;
        if(localStorage.num === undefined){
            localStorage.num = 1;
        }else{
            localStorage.num = parseInt(localStorage.num) + 1;
            nextNumber = parseInt(localStorage.num);
        }

        temp.push(
            {
                notice: false,
                number: nextNumber,
                title: title,
                content: content,
                writer: "홍길동",
                date: now.getFullYear().toString() + "." +
                    ( now.getMonth() + 1 > 9 ? ( now.getMonth() + 1 ).toString() : "0" + ( now.getMonth() + 1 ).toString() ) + "." +
                    now.getDate().toString(),
                time: now.getHours().toString() + ":" + now.getMinutes().toString(),
                likes: 0,
            }
        )

        localStorage.datas = JSON.stringify(temp);

    }


    return (
        <div className="Write-new-content-body">


            <form>
                <label className="Label-write-new-content">제목</label>
                <input className="Input-title-write-new-content" type="text" onChange={ e => onChangeTitle( e.target.value ) } value={ title }/>

                <br/><br/><br/>

                <label className="Label-write-new-content">내용</label>
                <textarea className="Input-content-write-new-content" type="text" onChange={ e => onChangeContent( e.target.value ) } value={ content }/>
            </form>


            <div style={ { display: "block", textAlign: "center" } }>

                <Link to="/board">
                    <button className="Button-write-new-content">
                        <div className="Button-write-new-content-text">
                            취소
                        </div>
                    </button>
                </Link>

                <Link to="/board">
                    <button className="Button-write-new-content" onClick={ createNewContent }>
                        <div className="Button-write-new-content-text">
                            등록
                        </div>
                    </button>
                </Link>

            </div>


        </div>
    )
}


export default WriteNewContent;
