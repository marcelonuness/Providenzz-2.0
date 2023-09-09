import Calendar from "@/components/calendar"
import ConsultList from "@/components/consultList"

export default function Agenda() {
    
    return (
      <div className="layoutDashboard">
        <Calendar />
        <ConsultList></ConsultList>
      </div>
    )
}