import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';
import FolderList from '../components/Folder/FolderList';
import FileList from '../components/File/FileList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../Config/FirebaseConfig';
import { ParentFolderIdContext } from '../context/ParentFolderIdContext';
import { ShowToastContext } from '../context/ShowToastContext';

export default function Home() {
  const {data:session}=useSession();
  const router=useRouter();
  const [folderList,setFolderList]=useState([])
  const [fileList,setFileList]=useState([])

  const db=getFirestore(app)
  const {parentFolderId,setParentFolderId}=useContext(ParentFolderIdContext)
  const {showToastMsg,setShowToastMsg}=useContext(ShowToastContext);

  useEffect(()=>{
    console.log("User Session",)
    if(!session)
    {
      router.push("/login")
    }
    else{
      setFolderList([]); 
      getFolderList();
      getFileList();

      console.log("User Session",session.user)
    }
    setParentFolderId(0);

  },[session,showToastMsg])

  const getFolderList=async()=>{
    setFolderList([]);
    const q=query(collection(db,"Folders"),
    where("parentFolderId",'==',0),
    where("createBy",'==',session.user.email));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
     console.log(doc.id, " => ", doc.data());
    setFolderList(folderList=>([...folderList,doc.data()]))
}); 
  }

  const getFileList=async()=>{
    setFileList([]);
    const q=query(collection(db,"files"),
    where("parentFolderId",'==',0),
    where("createdBy",'==',session.user.email));
  
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    setFileList(fileList=>([...fileList,doc.data()]))
}); 
  }
  return (
    <div className='p-5'>
      <SearchBar/>
      <FolderList folderList={folderList}/>
      <FileList fileList={fileList} />
    </div>
  )
}
