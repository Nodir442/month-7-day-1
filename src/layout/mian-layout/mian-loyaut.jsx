import React from "react";
import { Logo } from "../../assets/logo/Logo";
import { UserIcon } from "../../assets/icons/user-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { BasketIcon } from "../../assets/icons/basket-icon";
import { MailIcon } from "../../assets/icons/mail-icon";
import { LocationIcon } from "../../assets/icons/location-icon";
import { SocialsIcon } from "../../assets/icons/socials-icon";
import Carousel from "../../components/slider";
import { Button } from "../../components/UI/button";
import { PayIcon } from "../../assets/icons/pay-icon";
import { ZIcon } from "../../assets/icons/z-icon";
import { Products } from "../../components/product/products";
import { Acessuars } from "../../components/acessuars/acessuars";
export const MainLoyaut = () => {
  return (
    <>
      <header className="bg-darkSilver rounded-xl flex justify-between items-center  container mt-2 mb-20">
        <div className="flex items-center py-2">
          <Logo width={"60px"} height={"52px"} />
          <div className="ml-5 hover:text-secondary">
            <a
              href="#"
              className="py-3 text-2xl px-6 text-primary transition-all duration-300  hover:text-secondary"
            >
              MAN
            </a>
            <a
              href="#"
              className="py-3 text-2xl px-6 text-primary transition-all duration-300  hover:text-secondary"
            >
              WOMAN
            </a>
            <a
              href="#"
              className="py-3 text-2xl px-6 text-primary transition-all duration-300  hover:text-secondary"
            >
              SALE
            </a>
            <a
              href="#"
              className="py-3 text-2xl px-6 text-primary transition-all duration-300  hover:text-secondary"
            >
              CHILDREN
            </a>
            <a
              href="#"
              className="py-3 text-2xl px-6 text-primary transition-all duration-300  hover:text-secondary"
            >
              COLLECTION
            </a>
          </div>
        </div>
        <div className="flex gap-x-4 border-primary">
          <UserIcon width={"40px"} height={"40px"} />
          <HeartIcon width={"40px"} height={"40px"} />
          <BasketIcon width={"40px"} height={"40px"} />
        </div>
      </header>
      <main>
        <Carousel />
        <div className="container my-20">
          <p className="text-darkSilver text-lg mb-5">ALL MENU</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-[676px] h-[250px] bg-white rounded-3xl flex">
              <div className="pt-6 pl-10">
                <h2 className="text-[60px]">Caps</h2>
                <Button bgColor="bg-[#F7926E]" text="SHOP NOW" />
              </div>
              <img
                className="w-[312px] h-[206px] mt-auto mb-0 mr-[60px] ml-auto "
                src="../src/assets/images/Categories1.jpg"
                alt=""
              />
            </div>
            <div className="w-[676px] h-[344px] bg-white rounded-3xl flex">
              <div className="pt-6 pl-10">
                <h2 className="text-[60px]">TROUSERS</h2>
                <Button bgColor="bg-[#93B5E3]" text="SHOP NOW" />
              </div>
              <img
                className="w-[184px] h-[320px] mt-auto mb-0 mr-[60px] ml-auto "
                src="../src/assets/images/Categories2.jpg"
                alt=""
              />
            </div>
            <div className="w-[676px] h-[344px] bg-white rounded-3xl mt-[-94px] flex">
              <div className="pt-6 pl-10">
                <h2 className="text-[60px]">JACKETS</h2>
                <Button bgColor="bg-[#F1C25F]" text="SHOP NOW" />
              </div>
              <img
                className="w-[184px] h-[320px] mt-auto mb-0 mr-[60px] ml-auto "
                src="../src/assets/images/Categories2.jpg"
                alt=""
              />
            </div>
            <div className="w-[676px] h-[250px] bg-white rounded-3xl flex">
              <div className="pt-6 pl-10">
                <h2 className="text-[60px]">SNAKERS</h2>
                <Button bgColor="bg-[#E2AC8B]" text="SHOP NOW" />
              </div>
              <img
                className="w-[206px] h-[190px] mt-auto mb-[26px] mr-[60px] ml-auto "
                src="../src/assets/images/Categories4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container mb-20">
          <p className="text-darkSilver text-lg">NEW PRODUCTS</p>
          <div className="flex justify-between">
            <div className="w-[370px]">
              <p className="text-white text-[80px]">WE HAVE NEW PRODUCTS</p>
              <Button text="SEE ALL" bgColor="bg-secondary" />
            </div>
            <div className=" flex gap-2">
              <img src="../src/assets/images/new1.png" alt="New products" />
              <img src="../src/assets/images/new2.png" alt="New products" />
            </div>
          </div>
        </div>
        <Products />
        <div className="container mb-20">
          <p className="text-darkSilver text-lg">BY BRAND</p>
          <div className="flex justify-between">
            <div className="w-[370px]">
              <p className="text-white text-[80px]">SELECTION BY BRANDS</p>
              <Button text="BY BRAND" bgColor="bg-secondary" />
            </div>
            <div className=" flex gap-2">
              <img src="../src/assets/images/brands1.png" alt="Brands" />
              <img src="../src/assets/images/brands2.png" alt="Brands" />
              <img src="../src/assets/images/brands3.png" alt="Brands" />
              <img src="../src/assets/images/brands4.png" alt="Brands" />
            </div>
          </div>
        </div>
        <Acessuars/>
      </main>
      <footer>
        <div className="container h-[360px] bg-[#6EAEE3] rounded-3xl  pl-10 flex">
          <div>
            <div className="flex items-center mb-4 mt-[60px]">
              <ZIcon />
              <PayIcon />
            </div>
            <div className="flex items-center">
              <p className="text-[70px] font-semibold tracking-widest	">BILAN</p>{" "}
              <Button
                text="20%"
                bgColor="bg-[#F91B1B]"
                textColor="text-white"
              />
            </div>
            <p className="text-[70px] font-semibold tracking-widest mt-[-30px]	">
              CHEGIRMA
            </p>{" "}
          </div>
          <img
            className="w-[460px] h-[360px] ml-auto mr-[140px]"
            src="../src/assets/images/Banner.jpg"
            alt="Banner Img"
          />
        </div>
        <div className="mt-16 pl-10 container bg-[#262626] pt-10 pb-16 rounded-[20px]">
          {" "}
          <h3 className="text-secondary text-2xl mb-8 ">All or Nothing</h3>
          <div className="flex">
            <div className="grid gap-y-4 mr-20">
              <p className="text-white opacity-80 font-mono">+ 94 099 4001</p>
              <p className="text-white opacity-80 font-mono">+ 94 099 4001</p>
            </div>
            <div className="grid gap-y-4 mr-20">
              <p className="text-white opacity-80 font-mono">Biz haqimizda</p>
              <p className="text-white opacity-80 font-mono">
                Ish vaqti 11:00 - 23:00
              </p>
            </div>
            <div className="grid gap-y-2 pr-[100px] mr-[100px] border-r  border-[#333333]">
              <p className=" rounded-lg text-[#262626] bg-darkSilver flex gap-x-2 items-center py-2 px-3 opacity-80 font-mono">
                <MailIcon width={"20px"} height={"20px"} />
                allornothing.uz@gmail.com{" "}
              </p>
              <p className=" rounded-lg text-[#262626] bg-darkSilver flex gap-x-2 items-center py-2 px-3 opacity-80 font-mono">
                <LocationIcon width={"20px"} height={"20px"} /> Ish vaqti 11:00
                - 23:00
              </p>
            </div>
            <div className="my-auto">
              <SocialsIcon width={"136px"} height={"36px"} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
