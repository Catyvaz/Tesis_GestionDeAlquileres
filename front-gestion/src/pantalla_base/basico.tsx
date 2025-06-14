import "../styles/sidebars.css";
import React from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';

export const PantallaBasica: React.FC = () => {
  const menuItems = [
    {
      id: 'calendario',
      label: 'Calendario',
      href: '#',
      icon: CalendarMonthOutlinedIcon,
      active: true
    },
    {
      id: 'cabañas',
      label: 'Cabañas',
      href: '#',
      icon: HouseOutlinedIcon,
      active: false
    },
    {
      id: 'usuarios',
      label: 'Usuarios',
      href: '#',
      icon: PersonIcon,
      active: false
    },
    {
      id: 'reservas',
      label: 'Reservas',
      href: '#',
      icon: BookmarkAddedOutlinedIcon,
      active: false
    },
    {
      id: 'reseñas',
      label: 'Reseñas',
      href: '#',
      icon: StarRateRoundedIcon,
      active: false
    },
    {
      id: 'tareas',
      label: 'Tareas',
      href: '#',
      icon: ChecklistRoundedIcon,
      active: false
    }
  ];

  return (
    <>
      <div className="sidebar">
        <button className="btn-burguer">
          <MenuTwoToneIcon style={{ color: "primary", fontSize: "5vh" }} />
        </button>
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Logo empresa o nos</span>
        </a>
        <ul className="contenedor-lista-elementos">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a 
              href={item.href} 
              className={`nav-link text-white ${item.active ? 'active' : ''}`}
              aria-current={item.active ? 'page' : undefined}
              >
              <item.icon className="menuItem-icono" style={{ fontSize: "4vh" }} />
              {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

/* global bootstrap: false */
(() => {
  "use strict";
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
  });
})();
