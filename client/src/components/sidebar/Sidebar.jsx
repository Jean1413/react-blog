import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        };
     getCats ();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://forum.wordreference.com/attachments/43757/" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nam a ducimus aperiam veniam, nemo placeat illo est consectetur, iusto saepe.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                 <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
                </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span> 
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-pinterest"></i>
            <i className="sidebarIcon fab fa-instagram"></i>
          </div>
        </div>
    </div>
        
    )
}
