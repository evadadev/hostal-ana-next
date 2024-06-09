"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBed,
  faCamera,
  faEnvelope,
  faHouse,
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FlagLanguage } from "./FlagLanguage";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const SideBar: React.FC = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex  flex-row justify-between items-center text-primary mx-4 rounded-full mt-2">
        <FontAwesomeIcon icon={faBars} onClick={handleOpen} />
        <Link href="/home" className="flex flex-col items-center gap-1">
          <img className="w-12 h-12" src="/imgHostal.png" alt="logotipo" />
          <span className="font-bold">HOSTAL ANA</span>
        </Link>
        <div className="flex">
          <FlagLanguage />
        </div>
      </div>
      {openModal && (
        <div className="absolute top-0 left-0 z-10 flex flex-col bg-slate-50 gap-10 w-full h-screen  text-primary">
          <button
            onClick={handleClose}
            onTouchStart={handleClose}
            className="flex items-center mt-5 ml-5 font-bold gap-1 hover:text-secundary"
          >
            <FontAwesomeIcon icon={faXmark} />
            <p>{t("cerrar")}</p>
          </button>
          <div className="flex items-center ml-5 gap-3 hover:text-secundary">
            <FontAwesomeIcon icon={faHouse} />
            <Link
              onClick={handleClose}
              onTouchStart={handleClose}
              href="/home"
              className="text-2xl"
            >
              {t("inicio")}
            </Link>
          </div>
          <div className="flex items-center ml-5 gap-3 hover:text-secundary">
            <FontAwesomeIcon icon={faBed} />
            <Link
              onClick={handleClose}
              onTouchStart={handleClose}
              href="/room"
              className="text-2xl "
            >
              {t("habitaciones")}
            </Link>
          </div>
          <div className="flex items-center ml-5 gap-3 hover:text-secundary">
            <FontAwesomeIcon icon={faLocationDot} />
            <Link
              onClick={handleClose}
              onTouchStart={handleClose}
              href="/location"
              className="text-2xl "
            >
              {t("ubicacion")}
            </Link>
          </div>
          <div className="flex items-center ml-5 gap-3 hover:text-secundary">
            <FontAwesomeIcon icon={faCamera} />
            <Link
              onClick={handleClose}
              onTouchStart={handleClose}
              href="/gallery"
              className="text-2xl"
            >
              {t("galeria")}
            </Link>
          </div>
          <div className="flex items-center ml-5 gap-3 hover:text-secundary">
            <FontAwesomeIcon icon={faEnvelope} />
            <Link
              onClick={handleClose}
              onTouchStart={handleClose}
              href="/contact"
              className="text-2xl "
            >
              {t("contacto")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
