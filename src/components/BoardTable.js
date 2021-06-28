import React, {useState, useEffect} from "react";
import 'CSS/BoardTable.css'
import TableContent from "./TableContent";


function BoardTable( props ) {

    const [ contents, setContents ] = useState([])

    useEffect( () => {
        setContents(props.data.map( (data, index) =>
            <TableContent
                key={ index }
                data={ data }
            />
        ))
    }, [props])

    return (
        <div className="Table-body">


            <div className="Table-top">
                <div className="Text-table Table-column-number">
                    번호
                </div>
                <div className="Text-table Table-column-title" style={{textAlign: "center"}}>
                    제목
                </div>
                <div className="Text-table Table-column-writer">
                    작성자
                </div>
                <div className="Text-table Table-column-date">
                    등록일
                </div>
                <div className="Text-table Table-column-likes">
                    추천수
                </div>
            </div>


            { contents }


        </div>
    );
}

export default BoardTable;
