// import moment from "moment";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import moment from "moment/moment";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { app } from "../../Config/FirebaseConfig";
import { ShowToastContext } from "../../context/ShowToastContext";

function FileItem({ file }) {

  const db=getFirestore(app)
  const image="/" + file.type + ".png"
    const {showToastMsg,setShowToastMsg}
    =useContext(ShowToastContext)
    const deleteFile=async(file)=>{
        await deleteDoc(doc(db,"files",file.id.toString())).then(resp=>{
                setShowToastMsg('File Deleted!!!')
        })
    }
    
  return (
    <div
      className="grid grid-cols-1
    md:grid-cols-2 justify-between
    cursor-pointer hover:bg-gray-100
    p-3 rounded-md"

    >
      <div className="flex gap-2 items-center" >
        <Image
          src={image}
          alt="file-icon"
          width={26}
          height={20}
          on
        />
        <h2 className="text-[15px] truncate"
        onClick={()=>window.open(file.imageUrl)}
        >{file.name}</h2>
      </div>
      <div className="grid grid-cols-3 place-content-start">
        <h2 className="text-[15px]">
          {/* {moment(file.modifiedAt).format("MMMM DD, YYYY")} */}
          {moment(file.modifiedAt).format("MMMM DD, YYYY")}
        </h2>
        
        <h2 className="text-[15px]">
          {/* {(file.size / 1024 ** 2).toFixed(2) + " MB"} */}
          {(file.size / 1024 ** 2).toFixed(2) + " MB"}
          <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>deleteFile(file)}
          fill="none" viewBox="0 0 24 24" 
          strokeWidth={1.5} stroke="currentColor"
           className="w-5 h-5 float-right text-red-500
           hover:scale-110 transition-all">
       <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>

       
        </h2>
      </div>
      
    </div>
  );
}

export default FileItem;
