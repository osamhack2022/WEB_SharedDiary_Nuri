import './components.css';
export {ProfileCard}

function ProfileCard(props) {
    return (
        <div className="ProfileCard">
            <div className="image">
                <img src="" alt="profileImg" />
            </div>
            <div className="inform">
                <p>{props.profileElement.nickname}</p>
                <p>@유저네임</p>
            </div>
            <button>Follow</button>
        </div>
    );
}