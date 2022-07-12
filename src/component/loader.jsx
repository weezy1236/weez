
const Loader = ()=>{
  return (
    <div className="bg-black fixed bg-opacity-25 inset-0 flex justify-center items-center h-full align-center">
    <div className="flex justify-center items-center py-3" >
      <div className="animate-spin rounded-full h-32 w-32  border-b-2 border-red-700"/>
      <h1 className="flex text-red-800 font-semibold text-[30px] pl-5 items-center align-center justify-center">Loading...</h1>
    </div>
    
    </div>
  )

}
export default Loader