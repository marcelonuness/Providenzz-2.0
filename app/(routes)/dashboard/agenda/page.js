import Calendar from "@/components/calendar";
import ConsultList from "@/components/consultList";

export default function Agenda() {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center p-5">
                <h1 className="text-5xl m-8 hover:border-b-2 cursor-pointer hover:border-[#1F4D36]">Minha Agenda</h1>
                <Calendar></Calendar>
                <ConsultList></ConsultList>
            </div>
        </div>
    )
}