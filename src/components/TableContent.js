import 'CSS/TableContent.css'
import {Link} from "react-router-dom";

function TableContent( props ) {


    if( props.data.notice ){

        return (

            <Link to={ "/content?number=" + props.data.number }>
                <div className="Table-notice">

                    <div className="Text-table Text-table-bold Table-column-number">
                        공지
                    </div>

                    <div className="Text-table Text-table-bold Table-column-title">
                        { props.data.title }
                    </div>

                    <div className="Text-table Table-column-writer">
                        { props.data.writer }
                    </div>

                    <div className="Text-table Table-column-date">
                        { props.data.date }
                    </div>

                    <div className="Text-table Table-column-likes">
                        -
                    </div>

                </div>
            </Link>
        );

    } else {

        return(
            <Link to={ "/content?number=" + props.data.number }>

                <div className="Table-content">

                    <div className="Text-table Table-column-number">
                        { props.data.number }
                    </div>

                    <div className="Text-table Table-column-title">
                        { props.data.title }
                    </div>

                    <div className="Text-table Table-column-writer">
                        { props.data.writer }
                    </div>

                    <div className="Text-table Table-column-date">
                        { props.data.date }
                    </div>

                    <div className="Text-table Table-column-likes">
                        { props.data.likes }
                    </div>

                </div>

            </Link>
        )

    }
}

export default TableContent;
