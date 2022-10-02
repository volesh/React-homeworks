import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const submit = async (user) => {
        try {
            const {data} = await authService.login(user)
            authService.setTokens(data)
            navigate('/cars')
        }catch (e){
            console.log(e);
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Login'} {...register('username')}/>
            <input type="text" placeholder={'Password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export {Login};