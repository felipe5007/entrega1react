import { BsFillPeopleFill, BsFillCartFill } from 'react-icons/bs';
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { FaMapMarkedAlt, FaUserCircle } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import Cartwidget from '../CartWidget/CartWidget';


// Enlazar espacios de trabajo con Dom Ghost
const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col  bg-gray-900 text-white shadow-lg ">

        <SideBarIcon icon={<AiFillHome size="28" />} text={'Home'} id="Home"/>
        <SideBarIcon icon={<FaMapMarkedAlt size="32" />} text={'Mapa'} />
        <SideBarIcon icon={<MdExplore size="30" />} text={'Explorar'} />
        <SideBarIcon icon={<ImLab size="27" />} text={'Laboratorio'}/>
        <SideBarIcon icon={<BsFillPeopleFill size="30" />} text={'Comunidad'}/>
        <SideBarIcon icon={<FaUserCircle size="30" />} text={'Mi Perfil'}/>
        <SideBarIcon icon={<BsFillCartFill size="27" />} text={'Carrito'}> <Cartwidget> </Cartwidget> </SideBarIcon>

        </div>
    );
};

const SideBarIcon = ({ icon, text}) => (
<div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-150">
        {text}
    </span>
</div>
);

export default SideBar; 