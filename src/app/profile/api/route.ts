export const GET = async() =>{
    return Response.json("Profile api")
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