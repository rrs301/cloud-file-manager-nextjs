import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { app } from "../../Config/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ShowToastContext } from "../../context/ShowToastContext";
import { ParentFolderIdContext } from "../../context/ParentFolderIdContext";
function CreateFolderModal() {
    const docId=Date.now().toString();
    const [folderName,setFolderName]=useState();
    const {showToastMsg,setShowToastMsg}=useContext(ShowToastContext)
    const {data:session}=useSession();
  const {parentFolderId,setParentFolderId}=useContext(ParentFolderIdContext)

    const db=getFirestore(app)
    useEffect(()=>{
       
    },[])
    const onCreate=async()=>{
        console.log(folderName)
        await setDoc(doc(db,"Folders",docId),{
            name:folderName,
            id:docId,
            createBy:session.user.email,
            parentFolderId:parentFolderId
        })
        setShowToastMsg('Folder Created!')
    }
  return (
    <div>
      <form method="dialog" className="modal-box p-9 items-center">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="w-full items-center 
        flex flex-col justify-center gap-3">
          <Image src="/folder.png" alt="folder" width={50} height={50} />
          <input
            type="text"
            placeholder="Folder Name"
            className="p-2 border-[1px] outline-none
                rounded-md"
                onChange={(e)=>setFolderName(e.target.value)}
          />
          <button className="bg-blue-500
          text-white rounded-md p-2 px-3 w-full"
          onClick={()=>onCreate()}
          >Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateFolderModal;
