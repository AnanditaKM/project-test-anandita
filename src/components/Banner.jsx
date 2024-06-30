import '../css/banner.css';

export default function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1>Ideas</h1>
                <p>Where all our great things begin</p>
            </div>
            <img src="asset/banner1.jpeg" alt="banner image" className="banner" />
            <div className="triangle"></div>
        </div>
    );
}
