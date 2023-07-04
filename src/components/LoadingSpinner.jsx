import "../css/LoadingSpinner.css"

export default function LoadingSpinner(){
    return(
        <>
        <div className="loading-wrapper">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>

    )
}