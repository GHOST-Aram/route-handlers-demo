export const GET = async(_request: Request, { params }: UrlParams) =>{
    return Response.json({
        id: params.userId,
        name: "John Doe",
        email: "jd@yahoo.com"
    })
}

export const PATCH = async(request: Request, { params }: UrlParams) =>{
    const requestBody = await request.json()

    return Response.json({id: params.userId, ...requestBody })
}

export const DELETE = async(_request: Request, { params }:UrlParams) =>{
    return Response.json({ id: params.userId })
}

type UrlParams = { params: {userId: string },}