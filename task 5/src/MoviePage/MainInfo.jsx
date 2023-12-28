import React from "react";

function MainInfo(props) {
    function getDuration(duration) {
        return `${Math.floor(duration / 60)} ч. ${duration % 60} м.`;
    }

    function getActors(actorsString) {
        let content = [];
        let splitted = actorsString.split(", ");
        let size = splitted.length > 3 ? 3 : splitted.length;
        for (let i = 0; i < size; ++i) {
            content.push(
                <span key={splitted[i]} className="roboto-16">
                    {splitted[i]}
                </span>
            );
        }
        return content;
    }

    const handleImageError = (event) => {
        event.target.src =
            "https://sun9-62.userapi.com/impg/nBqoiIeDpOx7EWeq_R1E2pL4CDku7zuk0NgVMA/x_frUZ38t1c.jpg?size=386x500&quality=96&sign=e3a06582b9f5b917f692971c1d80ce47&type=album";
    };

    return (
        <div className="main-info-wrapper width-100">
            <img
                src={props.movie.posterUrl}
                alt={`${props.movie.title} poster`}
                onError={handleImageError}
            />
            <div className="column gap-20-wrapper width-100">
                <div className="column gap-5-wrapper">
                    <span className="roboto-24">{props.movie.title}</span>
                    <span className="roboto-16 fv-500 gray-color">
                        {props.movie.director}
                    </span>
                </div>
                <div className="sub-info-wrapper width-100">
                    <div className="column gap-5-wrapper">
                        <div className="row-wrap gap-15-wrapper">
                            <span className="roboto-16 gray-color">
                                Продолжительность
                            </span>
                            <span className="roboto-16">
                                {getDuration(props.movie.runtime)}
                            </span>
                        </div>
                        <div className="row-wrap gap-15-wrapper">
                            <span className="roboto-16 gray-color">Жанр</span>
                            <span className="roboto-16">
                                {props.movie && props.movie.genres.join(", ")}
                            </span>
                        </div>
                        <div className="row-wrap gap-15-wrapper">
                            <span className="roboto-16 gray-color">Год</span>
                            <span className="roboto-16">
                                {props.movie.year}
                            </span>
                        </div>
                        <div className="row-wrap gap-15-wrapper">
                            <span className="roboto-16 gray-color">
                                В главных ролях:
                            </span>
                            <div className="column gap-10-wrapper">
                                {getActors(props.movie.actors)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainInfo;
