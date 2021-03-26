import {User} from "../model/User.ts";

let users: User[]= [];

 const getUsers = ({response}:{response:any}) => {
    response.body={
        success:true,
        data:users
    }
}

 const addUser = async({request,response}:{request:any,response:any})=>{
    const body = await request.body();
    if(!request.hasBody()){
        response.status= 400;
        response.body = {
            success:false,
            msg: 'The request is empty'
        }
    }else{
        const user: User= body.value;
        users.push(user);

        response.status=201;
        response.body={
            success:true,
            data:user
        }
    }
}
export{getUsers,addUser}