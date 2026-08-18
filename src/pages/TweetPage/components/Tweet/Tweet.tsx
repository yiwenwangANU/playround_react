import type { FC } from "react";
interface Props {
   user: User,
   date: string,
   content: string,
   
}

type User = {
 id: string,
    name: string,
    thumbNail: string
}
const Tweet:FC