import { Link } from 'react-router-dom';
import '../static/css/footer.css';

export { Footer };

function Footer() {
    return (
        <div className="Footer">
            Footer Area
            <p>둘데가 없어서 잠깐 로그인, 회원가입 바로가기 좀 둠</p>
            <p><Link to="/accounts/signup">회원가입 바로가기</Link></p>
            <p><Link to="/accounts/login">로그인 바로가기</Link></p>

        </div>
    );
}