import type { FC } from "react";
import InputField from "./components/InputField";
interface Props {
    onSubmit: () => void
}
const Form: FC<Props> = ({onSubmit}) => {

    return <form onSubmit={onSubmit} className="grid grid-cols-[auto_1fr]">
        
        <InputField name="" label=""/>
    </form>
};

export default Form;
