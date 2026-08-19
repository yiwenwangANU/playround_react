import { useState, type FC } from "react";
import from ''
import useLike from "./hooks/useLike";
import Button from "../../components/Button";

const URL = 'https://questions.greatfrontend.com/api/questions/like-button'

const LikeButtonPage: FC = () => {
    const [liked, setLiked] = useState<boolean>(false)

    const { trigger, isMutating } = useLike(URL)
    const handleClick = () => 
        trigger({ action: liked ? 'unlike' : 'like' })
    
    return <Button variant={liked ? 'secondary': 'primary'} onClick={handleClick}>Like</Button>
};

export default LikeButtonPage;
