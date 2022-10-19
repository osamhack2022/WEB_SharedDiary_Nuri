import './components.css';
export {ProfileCard}

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="image">
                <img src="" alt="profileImg" />
            </div>
            <div className="inform">
                <p>유저닉네임</p>
                <p>@유저네임</p>
            </div>
            <button>Follow</button>
        </div>
    );
}