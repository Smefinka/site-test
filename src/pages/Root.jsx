import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Root (){

    return(
        <>
   <main>     
    <Header />
        <Outlet /> 
        </main>
        </>
    )
}
export default Root;