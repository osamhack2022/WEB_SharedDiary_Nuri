import './components.css';
export {ProfileCard}

function ProfileCard(props) {
    const page_hosturl = 'https://'+window.location.hostname
    const profile_image = props.profileElement.profile_image
    
    return (
        <div className="ProfileCard">
            <div className='ProfileCard-container'>
                <div className="image">
                    { profile_image === null ? 
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="defaultImg"/>:
                    <img src={`${page_hosturl}${props.profileElement.profile_image}`} alt="profileImg"/>
                    }
                </div>
                <div className="inform">
                    <p>{props.profileElement.nickname}</p>
                    <p>@유저네임</p>
                </div>
                <p className='btn'><button>Follow</button></p>
            </div>
        </div>
    );
}