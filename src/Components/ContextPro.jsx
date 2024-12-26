import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase.config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const Apicon = createContext()
const auth = getAuth(app)



export default function ContextPro({children}) {
  

    let [api,setApi] = useState([])
    let [arrData, setArrData] = useState([])
    let [oldData,setOlddata] = useState({})
    let [user,setUser] = useState()
    let [loading,setLoading] = useState(true)
    let [book,setBook] = useState([])  
    
    useEffect(()=>{
        async function bookData() {

            let url = await fetch('https://home-service-server-wine.vercel.app/bookData')
            let data = await url.json()

            setBook(data)
            
        }

        bookData()
    },[])

    useEffect(()=>{

        async function baby(){
            let url = await fetch('https://home-service-server-wine.vercel.app/alldata')
            let data = await url.json()
            setApi(data)
            
            
        }
        baby()

    },[])

    function handaleClick(passData){
        let oldDataAll = passData
        // let newArr = [...arrData, passData]
        // setArrData(newArr)
        
        
       setOlddata(oldDataAll)
       
       
     
       
      
    }

    function singUp(email,password){

        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)

    }

    function singIn(email,password){
setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    useEffect(()=>{
        let holddata = onAuthStateChanged(auth,(x)=>{
            setUser(x)
            setLoading(false)


        })

        return ()=>{
          holddata()
        }
    },[])

    const googleProvider = new GoogleAuthProvider()

    function googlePopSing(){
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    function singsOut(){
        return signOut(auth).then(()=>{

        })
    }

    


    function updatePro(name,photo){
       updateProfile(auth.currentUser ,{
        displayName:name,photoURL:photo
       }).then(()=>{})
    }

    function forgetPass(email){
        return sendPasswordResetEmail(auth,email)

        

    }


  return <Apicon.Provider value={{api,setApi,handaleClick,arrData,setArrData,oldData,setOlddata,singUp,singIn,user,setUser,googlePopSing,singsOut,loading,updatePro,forgetPass,book}}> {children} </Apicon.Provider>
  
}