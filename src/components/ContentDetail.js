import {useEffect, useState} from "react";

import 'CSS/ContentDetail.css'
import CommentTable from "./CommentaTable";
import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";


function ContentDetail( { location } ) {

    const [ data, setData ] = useState({});
    const [ update, setUpdate ] = useState( true );

    useEffect(() => {
        if (update){
            const query = queryString.parse( location.search );
            const allData = JSON.parse(localStorage.datas);
            setData(allData.find(element => element.number === parseInt(query.number)))
            setUpdate(false);
        }
    }, [update])

    function deleteContent() {
        const query = queryString.parse( location.search );
        const allData = JSON.parse(localStorage.datas);
        const indexContent = allData.indexOf(allData.find(element => element.number === parseInt(query.number)));
        allData.splice(indexContent, 1);
        localStorage.datas = JSON.stringify(allData);

    }

    function like() {
        const query = queryString.parse( location.search );
        const allData = JSON.parse(localStorage.datas);
        const indexContent = allData.indexOf(allData.find(element => element.number === parseInt(query.number)));
        allData[indexContent].likes = allData[indexContent].likes + 1;
        localStorage.datas = JSON.stringify(allData);
        setUpdate(true);
    }



    return(
        <div style={{width: "800px"}}>



            <div className="Content-detail">
                <div className="Content-detail-top">
                    <div className="Content-detail-title">
                        { data.title }
                    </div>
                    <div className="Content-detail-info">
                        <div className="Content-detail-date">
                            { data.date }
                        </div>
                        <div className="Content-detail-writer">
                            { data.writer }
                        </div>
                    </div>
                </div>


                <div className="Content-detail-content">
                    { data.content }
                </div>


                <div className="Content-detail-bottom">
                    <a style={ { float: "left" } } onClick={like}>
                        <div className="Content-detail-button1">
                            <div className="Content-detail-button-text">
                                추천 { data.likes }
                            </div>
                        </div>
                    </a>
                    <Link to="/board" style={ { float: "right" } } onClick={ deleteContent }>
                        <div className="Content-detail-button1">
                            <div className="Content-detail-button-text">
                                삭제
                            </div>
                        </div>
                    </Link>
                </div>
            </div>



            <CommentTable data={ data } number={ data.number } update={setUpdate}/>



            <div style={ { display: "flex", alignItems: "center" } }>
                <div className="New-content-button">
                    <Link to="/board">
                        <div className="New-content-button-text">
                            목록으로
                        </div>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default ContentDetail;
