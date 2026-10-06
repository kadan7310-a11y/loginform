import React ,{useState} from "react"
import axios from 'axios'
const Chatbot=()=>{
    const [query,setQuery]=useState()
    const[response,setResponse]=useState("")

const handleChange=(e)=>{
    setQuery(e.target.value)
}
const handleSubmit=async(e)=>{
    e.preventDefault();
try