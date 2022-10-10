import './randingpage.css'
import { Diary } from '../_components';
export { RandingPage };
import dev_img_profile from '../static/img/dev_test/프로필이미지.png';
import dev_img_diary from '../static/img/dev_test/doge-goorm.jpg';
import axios from "axios";

function RandingPage(props) {
  let data;
  axios.get('/home/diary')
        .then(function(res) {
          //res.data[1].title
          data=res.data
          const getEntries = Object.entries(res.data[0]).map((entrie, idx) => {
            return console.log(entrie, idx);
          });
          console.log(getEntries)
          } 
        )
        .catch(error=>console.log(error))

  // const content = data[0].content
  // console.log(content)

  return (
    <div className='RandingPage'>
      <div className="RandingPage-container">
        <div className="diary-area randingpage-area">
          
          <Diary/>
        </div>
        <div className="recommend-area randingpage-area" style={{backgroundColor:"red"}}>
            추천일기장 구역
        </div>
      </div>
    </div>
  );
}
  