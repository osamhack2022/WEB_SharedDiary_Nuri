import { Link } from 'react-router-dom';
import './components.css';

export { Footer };

function Footer() {
    return (
        <div className="Footer">
            Footer Area
            <p>둘데가 없어서 잠깐 로그인, 회원가입 바로가기 좀 둠</p>
            <p><Link to="/accounts/signup">회원가입 바로가기</Link></p>
            <p><Link to="/accounts/login">로그인 바로가기</Link></p>
            <p><Link to="/profile/create">프로필생성 바로가기</Link></p>
            <p><Link to="/profile/detail">프로필화면 바로가기</Link></p>
            <p><Link to="/diary">정민기 일기장 테스트</Link></p>
        </div>
    );
}