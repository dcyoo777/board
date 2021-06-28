import 'CSS/SortingDetail.css'

function SortingDetail(){
    return (
        <div className="Sorting-detail">
            <div className="Sorting-detail-section">
               <div className="Sorting-detail-section-item">
                   최신등록일순
               </div>
                <div className="Sorting-detail-section-item">
                   과거등록일수
               </div>
                <div className="Sorting-detail-section-item">

               </div>
            </div>

            <div className="Sorting-detail-section">
                <div className="Sorting-detail-section-item">
                    10개씩
                </div>
                <div className="Sorting-detail-section-item">
                    30개씩
                </div>
                <div className="Sorting-detail-section-item">
                    50개씩
                </div>
            </div>

            <div className="Sorting-detail-section">
                <div className="Sorting-detail-section-item">
                    제목+내용
                </div>
                <div className="Sorting-detail-section-item">
                    제목
                </div>
                <div className="Sorting-detail-section-item">
                    내용
                </div>
            </div>

            <div className="Sorting-detail-searching">
                <div className="Sorting-detail-searching-text">
                    검색어를 입력해주세요
                </div>
                <form><input type="text" className="Sorting-detail-searching-input"/></form>
            </div>

            <div className="Sorting-detail-searching-buttons">

                <button className="Sorting-detail-searching-button">
                    <div className="Sorting-detail-searching-button-text">검색</div>
                </button>
                <br/>
                <button className="Sorting-detail-searching-button">
                    <div className="Sorting-detail-searching-button-text">초기화</div>
                </button>

            </div>

        </div>
    )
}

export default SortingDetail;
