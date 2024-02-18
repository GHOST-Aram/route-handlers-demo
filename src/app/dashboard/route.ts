import Joi from "joi"
import { NextRequest, NextResponse } from "next/server"
export const POST = async(request: NextRequest) =>{

    const userData = await request.json()
    const userSchema = Joi.object({
        name: Joi.string().min(2).max(100),
        email: Joi.string().email(),
        password: Joi.string().alphanum(),
        // role: Joi.string()
    })

    try {
        
        const {value, error} = await userSchema.validateAsync(userData)

        return new NextResponse(JSON.stringify(userData), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error), {
            status: 400,
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

}