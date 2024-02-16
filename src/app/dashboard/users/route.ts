import { NextRequest } from "next/server"
import { headers } from "next/headers"
export const GET = async(request: NextRequest) =>{

    const reqHeaders = new Headers(request.headers)
    const headerList = headers()

    return Response.json( {
        data: "Users Data", 
        authorization1: reqHeaders.get("Authorization"), 
        authorization2: headerList.get("Authorization")
    } )
}