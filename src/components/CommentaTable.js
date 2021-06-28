import React, {useState, useEffect} from 'react'

import 'CSS/CommentTable.css'
import Comment from "./Comment";

function CommentTable( props ) {


    const [ text, setText ] = useState("")
    const [ comments, setComments ] = useState(<div/>);
    const [ numberOfComments, setNumberOfComments ] = useState(0);


    useEffect( () => {
        if( props.data.comments !== undefined ){
            let temp = <div/>
            temp = props.data.comments.map( ( data, index ) => (
                <Comment key={index} data={ data } update={ props.update } number={props.number}/>
            ) )
            setNumberOfComments(props.data.comments.length);
            setComments(temp);
        }
    }, [props]);


    function insertComment(){

        const allData = JSON.parse(localStorage.datas);
        const index = allData.indexOf(allData.find(element => element.number === props.data.number));
        const now = new Date();
        const newData = {
            writer: "홍길동",
            date: now.getFullYear().toString() + "." +
                ( now.getMonth() + 1 > 9 ? ( now.getMonth() + 1 ).toString() : "0" + ( now.getMonth() + 1 ).toString() ) + "." +
                now.getDate().toString(),
            time: now.getHours().toString() + ":" + now.getMinutes().toString(),
            text: text,
        };
        allData[index].comments.push(newData)
        localStorage.datas = JSON.stringify(allData);
        setText('');

        props.update(true)
    }


    return (
        <div className="Comment-body">


            <form className="New-comment">
                <input type="text" className="Comment-text-input" value={ text } onChange={ e => setText( e.target.value ) }/>
                <div className="Comment-button" onClick={insertComment}><div className="Comment-button-text">
                    등록
                </div></div>
            </form>


            <div className="Comment-table">
                <div className="Comment-table-top">
                    댓글( { numberOfComments } )
                </div>

                { comments }

            </div>


        </div>
    )
}

export default CommentTable;
