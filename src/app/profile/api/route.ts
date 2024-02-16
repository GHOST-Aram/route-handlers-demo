import { NextRequest } from "next/server"

export const GET = async(request: NextRequest) =>{
    const query = request.nextUrl.searchParams.get("query")


    const response =  Response.json({
        name: query ? query : "Jane Doe"
    })

    return response
}

export const POST = async(request: Request) =>{
    const requestBody = await request.json()

    const user = {
        email: requestBody.email,
        displayName: requestBody.name
    }

    const response = new Response(JSON.stringify(user),{
        headers: {
            "Content-type": "application/json"
        },
        status: 201
    })

    return response
}