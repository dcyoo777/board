import React, { useState } from 'react';

import 'CSS/MainBoardTable.css'
import BoardTable from "./BoardTable";

import first from 'imgs/first.png';
import previous from 'imgs/previous.png'
import next from 'imgs/next.png';
import last from 'imgs/last.png';

function MainBoardTable(props) {

    const pageNum = parseInt(( props.contents.numberOfContents - 1 ) / props.contents.pageMax ) + 1 ;

    let paging = []

    for( let i = 1; i <= pageNum; i++ ){
        paging.push(
            <a href="#mainTable" onClick={ () => { props.contents.pageChange( i ); } }><div className="Paging-number"> { i } </div></a>
        )
    }

    return(
        <div id="mainTable" className="Main-board-body">


            <BoardTable
                data={ props.contents.data.slice( props.contents.pageMax * ( props.contents.page - 1 ), props.contents.pageMax * props.contents.page ) }
                showContentDetail={ props.showContentDetail }
                showData={ props.showData }
                boardView={ props.view }
            />
            <div className="Table-bottom">

                <div className="Contents-number">
                    총 { props.contents.numberOfContents }건
                </div>

                <div className="Present-page">
                    { props.contents.page } / { pageNum }
                </div>

            </div>
            <br/>


            <div className="Paging" style={ { display: "flex", alignItems: "center" } }>
                <div className="Paging-navs">

                    <a href="#mainTable" onClick={ () => { props.contents.pageChange( 1 ); } }><img src={ first } className="Paging-first"/></a>
                    <a href="#mainTable" onClick={ () => { if ( props.contents.page > 1 ) props.contents.pageChange( props.contents.page - 1 ); } }><img src={ previous } className="Paging-previous"/></a>

                    { paging }

                    <a href="#mainTable" onClick={ () => { if ( props.contents.page < pageNum ) props.contents.pageChange( props.contents.page + 1 ); } }><img src={ next } className="Paging-next"/></a>
                    <a href="#mainTable" onClick={ () => { props.contents.pageChange( pageNum ); } }><img src={ last } className="Paging-last"/></a>

                </div>
            </div>


            <div style={ { display: "flex", alignItems: "center" } }>
                <div className="New-content-button">
                    <a href="#" onClick={ ( ) => {

                        props.contents.newContent( true )
                        props.view( false )

                    } }>

                        <div className="New-content-button-text">
                            글쓰기
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default MainBoardTable;
