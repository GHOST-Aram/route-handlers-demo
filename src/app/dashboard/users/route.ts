import { NextRequest } from "next/server"
import { headers } from "next/headers"
export const GET = async(request: NextRequest) =>{

    const reqHeaders = new Headers(request.headers)
    const headerList = headers()

    return new Response ( JSON.stringify({
        data: "Users Data", 
        authorization1: reqHeaders.get("Authorization"), 
        authorization2: headerList.get("Authorization"),
        cookie: request.cookies.get("theme")
    }), {
        headers:{
            "Content-Type": "application/json",
            "Cookie": "theme=dark"
        }
    } )
}