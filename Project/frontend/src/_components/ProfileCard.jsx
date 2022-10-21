import axios from "axios";
import { Link } from 'react-router-dom';
import './components.css';
export {ProfileCard}

function ProfileCard(props) {
    const page_hosturl = 'https://'+window.location.hostname
    const profile_image = props.profileElement.profile_image
    const nickname = props.profileElement.nickname
    const username = '@'+'유저네임'
    const self_intro = props.profileElement.self_intro.substr(0,30)
    const email = props.profileElement.user
    const id = props.profileElement.id
    
    

    return (
        <Link to="/myspace/:userid" state={{id: id}}>
            <div className="ProfileCard">
                <div className='ProfileCard-container'>
                    <div className="image">
                        { profile_image === null ? 
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="defaultImg"/>:
                        <img src={`${page_hosturl}${props.profileElement.profile_image}`} alt="profileImg"/>
                        }
                    </div>
                    <div className="inform">
                        <p>{nickname}</p>
                        <p>{username}</p>
                        <p>{self_intro}</p>
                    </div>
                    <p className='btn'><button>Follow</button></p>
                </div>
            </div>
        </Link>
        
    );
}