"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"



export default function SideBar() {

    const url = usePathname()

    return(
        <aside className="h-screen w-64 bg-[#1F4D36] text-white">
            <div className="">
                <nav className="flex justify-center text-sm h-full">
                    <ul className="w-full px-5 h-full">
                        <Link href="/dashboard">
                            <li className="flex items-center cursor-pointer">
                                <Image
                                    src="/Providenzz-logo2.png"
                                    width={150}
                                    height={0}
                                    alt="Logo Providenzz"
                                ></Image>
                            </li>
                        </Link>
                        <Link href="/dashboard">
                            <li className={`${url === "/dashboard" ? "bg-white text-[#1F4D36]" : ""} md:mt-16 cursor-pointer rounded-md h-[35px] hover:bg-white hover:text-[#1F4D36] p-1 flex items-center  my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>

                                <span className="ml-3">Início</span>
                            </li>
                        </Link>
                        <Link 
                            href="/dashboard/agenda"
                        >
                        <li className={`${url === "/dashboard/agenda" ? "bg-white text-[#1F4D36]" : ""} rounded-md cursor-pointer h-[35px] hover:bg-white hover:text-[#1F4D36] p-1 flex items-center  my-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                            <span className="ml-3">Agenda</span>
                        </li>
                        </Link>
                        <Link href="/dashboard/pacientes">
                            <li className={`${url === "/dashboard/pacientes" ? "bg-white text-[#1F4D36]" : ""} rounded-md cursor-pointer h-[35px] hover:bg-white hover:text-[#1F4D36] p-1 flex items-center  my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>

                            <span className="ml-3">Pacientes</span> 
                            </li>
                        </Link>
                        <Link href="/dashboard/financas">
                            <li className={`${url === "/dashboard/financas" ? "bg-white text-[#1F4D36]" : ""} rounded-md cursor-pointer h-[35px] hover:bg-white hover:text-[#1F4D36] p-1 flex items-center  my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>

                            <span className="ml-3">Finanças</span>    
                            </li>
                        </Link>
                        <Link href="dashboard/econsulta">
                            <li className={`${url === "/dashboard/econsulta" ? "bg-white text-[#1F4D36]" : ""} rounded-md cursor-pointer h-[35px] hover:bg-white hover:text-[#1F4D36] p-1 flex items-center  my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>

                            <span className="ml-3">E-consulta</span>    
                            </li>                        
                        </Link>
                        <Link href="dashboard/integracoes">
                            <li className={`${url === "/dashboard/integracoes" ? "bg-white text-[#1F4D36]" : ""} rounded-md cursor-pointer h-[35px] hover:bg-white hover:text-[#1F4D36] p-1 flex items-center  my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>

                            <span className="ml-3">Integrações</span>    
                            </li>                            
                        </Link>
                        <Link href="/dashboard/configuracoes">
                            <li className={`${url === "/dashboard/configuracoes" ? "bg-white text-[#1F4D36]" : ""} rounded-md cursor-pointer h-[35px] hover:bg-white hover:text-[#1F4D36] p-1 flex items-center  my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

                            <span className="ml-3">Configurações</span>    
                            </li>                        
                        </Link>                       
                        
                            
                            <li className={`rounded-md cursor-pointer h-[35px] hover:bg-white hover:text-[#1F4D36] flex items-center sm:mt-24 max-md:mt-56 p-1 my-2`}>
                                
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg>


                            <span className="ml-3">Sair</span>    
                            </li>                        
                      
                                 

                    </ul>
                </nav>
            </div>
        </aside>
    )
}