import {useNavigate,useParams} from 'react-router-dom';

const Post=()=>{
    const history=useNavigate();
    console.log(history);
    const{category,topic}=useParams();
    return(
        <>
           <div>
               <h2>This is posts page-{category}/{topic}</h2>
           </div>
        </>
    );
}

export default Post;