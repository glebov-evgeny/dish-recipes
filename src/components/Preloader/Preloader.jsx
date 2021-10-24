import preloader from './img/preloader.svg';

function Preloader(){
    return (

        <div className="preloader">
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export {Preloader}