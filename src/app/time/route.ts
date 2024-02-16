export const dynamic = 'force-dynamic'
export const GET = () =>{
    return Response.json(new Date().toLocaleTimeString())
}