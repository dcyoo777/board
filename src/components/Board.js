import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import 'CSS/MainBoardTable.css'
import BoardTable from "./BoardTable";

import first from 'imgs/first.png';
import previous from 'imgs/previous.png'
import next from 'imgs/next.png';
import last from 'imgs/last.png';

import { Link } from "react-router-dom";

function Board( { location } ) {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfContent, setNumberOfContent] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    const [paging, setPaging] = useState( <div /> );

    useEffect(() => {
        let allData = [];
        if(localStorage.datas !== undefined){
            allData = JSON.parse( localStorage.datas );
        }
        const query = queryString.parse( location.search );
        setPage( ( parseInt( query.page ) > 0 ? parseInt( query.page ) : 1 ) );
        setData( allData.slice( 10 * ( page - 1 ), 10 * page ) );
        setNumberOfContent( allData.length );
        setPageNum( 1 + parseInt(( numberOfContent - 1 ) / 10 ) );

        const temp = [];

        let path = "/board?page=" + ( page>1 ? (page-1).toString() : "1" );
        temp.push(<Link key={0} to={path} onClick={() => {if(page>1)setPage(page-1)}}><img src={ previous } className="Paging-previous"/></Link>)

        for( let i = 1; i <= pageNum; i++ ){
            let path = "/board?page=" + i.toString();
            temp.push(
                <Link key={i} to={path} onClick={() => {setPage(i)}}>
                    <div className="Paging-number"> { i } </div>
                </Link>
            )
        }

        path = "/board?page=" + (page < pageNum ? (page+1).toString() : pageNum.toString());
        temp.push(<Link key={"last"} to={path} onClick={() => {if(page<pageNum)setPage(page+1)}}><img src={ next } className="Paging-next"/></Link>)

        setPaging(temp);

    }, [pageNum, numberOfContent, location])

    return(
        <div className="Main-board-body">


            <BoardTable
                data={ data }
            />

            <div className="Table-bottom">

                <div className="Contents-number">
                    총 { numberOfContent }건
                </div>

                <div className="Present-page">
                    { page } / { pageNum }
                </div>

            </div>
            <br/>


            <div className="Paging" style={ { display: "flex", alignItems: "center" } }>
                <div className="Paging-navs">

                    <Link to={"/board?page=1"} onClick={() => {setPage(1)}}><img src={ first } className="Paging-first"/></Link>
                    { paging }
                    <Link to={"/board?page="+pageNum.toString()} onClick={() => {setPage(pageNum)}}><img src={ last } className="Paging-last"/></Link>

                </div>
            </div>


            <div style={ { display: "flex", alignItems: "center" } }>
                <div className="New-content-button">
                    <Link to="/write">
                        <div className="New-content-button-text">
                            글쓰기
                        </div>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Board;
