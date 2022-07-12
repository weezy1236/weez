import logo from '../images/logo.svg'

const Header = ()=>{

    return (
       
            <header  className="w-full flex justify-center items-center align-center">
            
            <div className='flex justify-start md:justify-start mx-4 my-10 '>
            <div className='text-base text-2xl font-semibold text-[#5878bc] shrink'>Github</div>
            </div>
            <div className='flex justify-start md:justify-start mx-4 my-5  '>
            <div className='text-base text-2xl font-semibold text-[#5878bc] '>Doc</div>
            </div>
           
           <div className=' min-w-[30px] max-w-[600px] shrink grow sm:w-3/4 sm:justify-center sm:items-center w-full  flex justify-center items-center mx-20 my-5'>
           <img src={logo} alt="" className='w-32 text-[35px] shrink cursor-pointer flex-none '/>
           </div>
           
           <div className='flex justify-end md:justify-end mx-4 my-5'>
            <div className='text-base text-2xl  font-semibold text-[#5878bc]'>Wallets</div>
            </div>
            <div className='flex justify-start md:justify-start mx-4 my-5'>
            <div className='text-base text-2xl font-semibold text-[#5878bc] text-2xl '>Apps</div>            
           </div>
           


        </header>
        
        
    )
}

export default Header;



{/* <ul
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
  className="inline-block p-2 font-normal bg-white border border-solid rounded-t-lg active dark:bg-white dark:text-blue-500"
>
  <button
  id="phrase" data-tabs-target="#phrase" type="button" role="tab" aria-controls="phrase" aria-selected="false"
    
    className="bg-transparent px-2 border-solid border-[#6c757d]"
  >
    Phrase
  </button>
</li>
<li
  role="presentation"
  className="list-none m-0 p-0 items-center flex"
>
  <button
  id="privateKey" data-tabs-target="#privateKey" type="button" role="tab" aria-controls="privateKey" aria-selected="false"
  className="bg-transparent text-[#6c757d] px-2  border-solid border-[#6c757d]">
    Private Key
  </button>
</li>
</ul>




<div id="myTabContent">
<div>
  <form action="">
      <div className="hidden">
      <div
      id="phrase" role="tabpanel" aria-labelledby="phrase-tab"
      className="flex flex-col align-center items-center"
    >
      <textarea
        name=""
        id="phrase"
        cols="30"
        rows="10"
        className="block w-full py-1.5 px-3 text-base font-normal leading-6 text-[#212529] border-solid border border-[#ced4da] rounded h-[90px] "
      ></textarea>
    </div>
    <label
      htmlFor="formTxt"
      className="text-[#587087] text-[15px] font-normal"
    >
      Typically 12 (sometimes 24) words separated by single spaces
    </label>

    <div className="bg-">
      <button>import</button>
    </div>
      </div>
    

   <div className="hidden">
   <div
     id="privateKey" role="tabpanel" aria-labelledby="privateKey-tab"
      className="flex flex-col align-center items-center"
    >
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="block w-full py-1.5 px-3 text-base font-normal leading-6 text-[#212529] border-solid border border-[#ced4da] rounded h-[90px] "
      ></textarea>
    </div>
    <label
      htmlFor="formTxt"
      className="text-[#587087] text-[15px] font-normal"
    >
      Typically 12 (sometimes 24) words separated by single spaces
    </label>

    <div className="bg-">
      <button>import</button>
    </div>
   </div>
  </form>
</div>
</div> */}