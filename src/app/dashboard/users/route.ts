import { NextRequest } from "next/server"
import { headers, cookies } from "next/headers"
export const GET = async(request: NextRequest) =>{

    const reqHeaders = new Headers(request.headers)
    const headerList = headers()
    cookies().set('numberOfVisits', '20')
    cookies().set('theme', 'dark')

    return new Response ( JSON.stringify({
        data: "Users Data", 
        authorization1: reqHeaders.get("Authorization"), 
        authorization2: headerList.get("Authorization")
    }), {
        headers:{
            "Content-Type": "application/json",
            "Cookie": "theme=dark"
        }
    } )
}