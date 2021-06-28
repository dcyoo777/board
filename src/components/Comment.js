import 'CSS/Comment.css'

function Comment( props ) {

    function deleteComment(){

        const allData = JSON.parse(localStorage.datas);
        const indexContent = allData.indexOf(allData.find(element => element.number === props.number));
        const indexComment = allData[indexContent].comments.indexOf(allData[indexContent].comments.find(element => element.writer === props.data.writer && element.text === props.data.text && element.time === props.data.time))

        allData[indexContent].comments.splice(indexComment, 1);
        localStorage.datas = JSON.stringify(allData);

        props.update(true)
    }

    return (
        <div className="Comment">
            <div className="Comment-content">
                <div className="Comment-content-info">
                    { props.data.writer } { props.data.date } { props.data.time }
                </div>
                <div className="Comment-content-text">
                    { props.data.text }
                </div>
            </div>

            <div className="Comment-button" style={ { float: "right" } } onClick={deleteComment}><div className="Comment-button-text">
                삭제
            </div></div>
        </div>
    )
}

export default Comment;
