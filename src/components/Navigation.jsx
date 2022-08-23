import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AppRoutes from "../Services/AppRoutes";

const Navigation = () => {
  const [menu, setmenu] = useState([
    {
      key: 1,
      label: "Home",
      link: AppRoutes.home
    },
    {
      key: 2,
      label: "Bestseller",
      link: AppRoutes.bestSeller,
    },

    {
      key: 3,
      label: "Category",
      link: AppRoutes.category,
    },

    {
      key: 4,
      label: "Find a Store",
      link: AppRoutes.store,
    },

    {
      key: 5,
      label: "Blog",
      link: AppRoutes.blog,
    },
  ]);

  return (
    <nav className="flex flex-row px-12 py-1 justify-center">
      {menu.map((item, index) => (
        <Fade bottom delay={index * 200} key={item.key}>
          <div>
            <NavLink
              to={item.link}
              className={
                item.isactive
                  ? " text-violet-900 font-bold px-12"
                  : " text-slate-400 px-12"
              }
              onClick={() => {
                var tempmenu = [...menu];
                tempmenu.forEach(function (ditem) {
                  ditem.isactive = false;
                });
                tempmenu[index].isactive = true;
                setmenu([...tempmenu]);
              }}
            >
              {item.label}
            </NavLink>
            {item.isactive && (
              <p class="px-12 text-center justify-center text-violet-900">
                <FiberManualRecordIcon fontSize="small" />
              </p>
            )}
          </div>
        </Fade>
      ))}
    </nav>
  );
};

export default Navigation;
