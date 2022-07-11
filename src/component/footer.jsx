import discord from '../images/discord.svg'
import telegram from '../images/telegram.svg'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'
const Footer=()=>{
    return(

        <footer className="flex flex-row w-full  h-[150px] align-center items-center justify-center  md:justify-center md:items-center 
        md:h-[150px]  
         sm:flex xs:flex-col sm:justify-around items-center sm:justify-center sm:h-8 text-[#5878bc] font-semibold">
           
        <a href="#" rel="noreferrer noopener " className="flex w-[150px] h-[20px] shrink-0 justify-center items-center">
        <div className='w-[20px] h-[20px] mr-2'>
            <img src={discord} alt=""  />
        </div>
        <p>Discord</p></a>
        <a href="#" rel="noreferrer noopener " className="flex w-[150px] h-[20px] shrink-0 justify-center items-center">
        <div className='w-[20px] h-[20px] mr-2'>
            <img src={telegram} alt=""  />
        </div>
        <p>Telegram</p></a>
        <a href="#" rel="noreferrer noopener " className="flex w-[150px] h-[20px] shrink-0 justify-center items-center">
        <div className='w-[20px] h-[20px] mr-2'>
            <img src={twitter} alt=""  />
        </div>
        <p>Twitter</p></a>
        <a href="#" rel="noreferrer noopener " className="flex w-[150px] h-[20px] shrink-0 justify-center items-center">
        <div className='w-[20px] h-[20px] mr-2'>
            <img src={github} alt=""  />
        </div>
        <p>Github</p></a>
        


    </footer>
    )
    

}

export default Footer;