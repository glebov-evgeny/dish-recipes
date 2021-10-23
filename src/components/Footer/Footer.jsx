function Footer() {
    return(
        <footer className="footer">            
            <div className="container footer__container">
                <p>&#9675; {new Date().getFullYear()} год</p>
                <a href="//ea-glebov.ru/" target="_blank" rel='noreferrer'>Portfolio</a>
            </div>
        </footer>
    )
}

export {Footer}