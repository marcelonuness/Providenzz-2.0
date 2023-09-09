import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(req) {
    const consults = await prisma.consultation.findMany()

     /* await prisma.consultation.create({
        data: {
            patientName: "marcelo",
            doctorName: "werr",
            selectedDate: "09/30/2023",
            duration: "15 min",
            description: "consulta de retorno"
        }
    })  */

    return new Response(JSON.stringify(consults))
}