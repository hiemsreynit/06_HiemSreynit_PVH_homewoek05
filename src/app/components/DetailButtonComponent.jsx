"use client";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";


export default function DetailButtonComponent({item}) {

    const [open, setOpen] = useState(false);

  return (
    <>
        <ButtonComponent onClick={() => setOpen(!open)}>
            View
        </ButtonComponent>
        {
            open && (
                <dialog
                    open
                    className="w-full h-full flex items-center justify-center gap-y-2 absolute inset-0 bg-black/60 "
                >
                        <section className="flex flex-col gap-y-3 bg-main w-100 h-fit text-white rounded-xl shadow-[0_0px_2px_0_rgba(0,0,0,0.2)] shadow-gray-300/30 p-4">
                            <section className="flex justify-between items-center">
                                <p>Item Details</p>
                                <button className='hover:bg-gray-800 w-fit h-fit text-xs bg-bar shadow-[0_0px_2px_0_rgba(0,0,0,0.2)] shadow-gray-300/20 text-white px-3 py-1 rounded-lg' onClick={() => setOpen(false)}>
                                    Close
                                </button>
                            </section>
                            <section className="w-full flex flex-col gap-y-2">
                                <p className="font-bold text-xs">ID: <span className="text-gray-300 font-normal">{item.id}</span></p>
                                <p className="font-bold text-xs">Name: <span className="text-gray-300 font-normal">{item.item_name}</span></p>
                                <p className="font-bold text-xs">Price: <span className="text-gray-300 font-normal">${item.item_price}</span></p>
                                <p className="font-bold text-xs">Description: <span className="text-gray-300 font-normal">{item.item_description}</span></p>
                            </section>
                        </section>
                </dialog>
            )
        }
    </>
  )
}
