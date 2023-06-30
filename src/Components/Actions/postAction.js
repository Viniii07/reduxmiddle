import { ServerCallService } from "../ServerCallService/ServerCallService"
export const postAction=(d)=>{
    ServerCallService.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            d({
                type:"POST",
                payload:res.data
            })
        })
        .catch((failure)=>{
            console.log(failure)
        })
}