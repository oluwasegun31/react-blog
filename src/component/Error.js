function ErrorMessage({isError}){
    return(
        <section className="errorMess">
                <span>ERROR - {isError}</span>
            </section>
    )
}

export default ErrorMessage