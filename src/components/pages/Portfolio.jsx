import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div className='bg-[#1f1e1e] text-[#e7e0e0] ubuntu-font p-[10px] md:p-[25px] overflow-x-hidden'>
            {/* nav-section */}
            <div className='h-[50px] md:min-h-[100px] mt-[10px]'>
                <ul className='flex gap-5 justify-end border-b md:border-none'>
                    <li><Link>About Me</Link></li>
                    <li><Link>Skills</Link></li>
                    <li><Link>Contact Me</Link></li>
                </ul>
            </div>
            {/* hero-section */}
            <div className='min-h-[300px] flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-evenly mt-[60px]'>
                {/* intro */}
                <div className='flex flex-col gap-5 md:gap-10'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-[18px] tracking-wider'>Hello, I'm Urvashi Prajapat</p>
                        <p className='text-[50px] text-[#fff] font-medium leading-11'>MERN Stack <br />Developer</p>
                        <p className='text-[18px] tracking-wider'>based in Jaipur</p>
                    </div>
                    <div className='text-sm flex gap-7'>
                        <button className=' text-[#1f1e1e] bg-[#e7e0e0] px-7 py-2 hover:shadow-2xl cursor-pointer'>Resume</button>
                        <button className='text-[#e7e0e0] bg-[#000] px-5 py-2 hover:shadow-2xl cursor-pointer'>Learn More</button>
                    </div>
                </div>
                {/* profile-pic */}
                <div className='relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]'>
                    <div className='opacity-60'>
                        <img className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full' src='https://plus.unsplash.com/premium_photo-1671829480432-9b0f10d869ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' alt=''></img>
                    </div>
                    {/* <div className='absolute inset-0 left-[13%] top-[15%] w-full h-full rounded-full'>
                        <img className='w-[300px] h-[300px] rounded-full' src='https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww'></img>
                    </div> */}
                </div>
            </div>
            {/* about-section */}
            <div className='flex flex-col gap-10 mt-[50px] md:mt-[120px]'>
                {/* about-text */}
                <div className='flex flex-col items-center justify-center gap-5'>
                    <p className='text-[40px] text-[#fff]'>About</p>
                    <p className='text-[14px] text-center tracking-wider px-[5px] md:px-[150px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores saepe nemo aperiam esse facere et, error deleniti fugiat ea architecto sed harum dolores dicta, quasi eveniet omnis doloremque repellat iure itaque modi! Labore, asperiores quis sapiente incidunt pariatur similique dicta delectus id, iure, deserunt sequi dolorum facere excepturi sint hic tenetur. Non, cumque tempora? Autem expedita culpa, hic aliquam nulla veniam similique voluptatum, minima non saepe est magnam. Sequi, enim modi! Officia dignissimos obcaecati velit eos quasi dicta vel repellat quidem quisquam nisi, itaque, consequuntur eum voluptatibus voluptatem sapiente nemo optio incidunt at minus in! Quo eos vel error exercitationem.</p>
                </div>
                {/* ids-container */}
                <div className='flex flex-col items-center md:flex-row md:justify-evenly gap-10'>
                    {/* mail */}
                    <div className='w-[150px] h-[150px] rounded-full flex flex-col p-[10px] items-center justify-center bg-[#888484] shadow-2xl'>
                        <div className='text-4xl text-[#fff]'><p><i className="ri-mail-fill"></i></p></div>
                        <div className='w-full h-[40%] wrap-break-word overflow-hidden mt-[10px] text-center'><p className='text-sm'>URVASHIUMAPRAJAPAT@GMAIL.COM</p></div>
                    </div>
                    {/* github */}
                    <div className='w-[150px] h-[150px] rounded-full flex flex-col p-[10px] items-center justify-center bg-[#888484] shadow-2xl'>
                        <div className='text-4xl text-[#fff]'><p><i className="ri-github-fill"></i></p></div>
                        <div className='w-full h-[40%] wrap-break-word overflow-hidden mt-[10px] text-center'><p className='text-sm'>URVASHIUMAPRAJAPAT1903</p></div>
                    </div>
                    {/* linkedin */}
                    <div className='w-[150px] h-[150px] rounded-full flex flex-col p-[10px] items-center justify-center bg-[#888484] shadow-2xl'>
                        <div className='text-4xl text-[#fff]'><p><i className="ri-linkedin-box-fill"></i></p></div>
                        <div className='w-full h-[40%] wrap-break-word overflow-hidden mt-[10px] text-center'><p className='text-sm'>URVASHIUMAPRAJAPAT</p></div>
                    </div>
                    {/* phone-num */}
                    <div className='w-[150px] h-[150px] rounded-full flex flex-col p-[10px] items-center justify-center bg-[#888484] shadow-2xl'>
                        <div className='text-4xl text-[#fff]'><p><i className="ri-smartphone-fill"></i></p></div>
                        <div className='w-full h-[40%] wrap-break-word overflow-hidden mt-[10px] text-center'><p className='text-sm'>6376142838</p></div>
                    </div>
                </div>
            </div>
            {/* what i do-section */}
            <div className='mt-[50px] md:mt-[120px]'>
                {/* text */}
                <div>
                    <p className='text-[#fff] text-[40px] text-center'>What I do </p>
                </div>
                {/* tags */}
                <div className='flex flex-col gap-7 md:flex-row md:gap-10 w-full items-center justify-evenly mt-[35px] px-[20px] md:px-0 '>
                    {/* tag-1 */}
                    <div className='bg-[#363434] text-[#eee3e3] w-full md:w-[30%] lg:w-[20%] flex flex-col gap-2 items-center justify-center border-b-7 border-b-[#111] shadow-2xl px-5 py-2'>
                        <div className='text-4xl text-[#1f1b1b]'><i className="ri-code-box-line"></i></div>
                        <div className='text-[25px] text-center'>Web <br />Development</div>
                    </div>
                    {/* tag-2 */}
                    <div className='bg-[#363434] text-[#eee3e3] w-full md:w-[30%] lg:w-[20%] flex flex-col gap-2 items-center justify-center border-b-7 border-b-[#111] shadow-2xl px-5 py-2'>
                        <div className='text-4xl text-[#1f1b1b]'><i className="ri-quill-pen-fill"></i></div>
                        <div className='text-[25px] text-center'>Web <br />Design</div>
                    </div>
                    {/* tag-3 */}
                    <div className='bg-[#363434] text-[#eee3e3] w-full md:w-[30%] lg:w-[20%] flex flex-col gap-2 items-center justify-center border-b-7 border-b-[#111] shadow-2xl px-5 py-2'>
                        <div className='text-4xl text-[#1f1b1b]'><i className="ri-cpu-line"></i></div>
                        <div className='text-[25px] text-center'>Software <br />Development</div>
                    </div>
                </div>
            </div>
            {/* skills-section */}
            <div className='mt-[50px] md:mt-[120px]'>
                {/* text */}
                <div>
                    <p className='text-[#fff] text-[40px] text-center'>Skills</p>
                </div>
                {/* tags */}
                <div className='flex flex-col gap-5 md:flex-row md:gap-10 w-full items-center justify-evenly mt-[35px] bg-[#363434] text-[#fff] border-r-5 border-l-5 border-[#111] shadow-2xl'>
                    {/* tag-1 */}
                    <div className=' w-[20%] flex flex-col items-center justify-center px-5 py-2'>
                        <div className='text-4xl text-[#1f1b1b]'><i className="ri-html5-fill"></i></div>
                        <div className='text-[25px] text-center'>HTML</div>
                        <div className='text-[25px] text-green-700'>90%</div>
                    </div>
                    {/* tag-2 */}
                    <div className=' w-[20%] flex flex-col items-center justify-center px-5 py-2'>
                        <div className='text-4xl text-[#1f1b1b]'><i className="ri-html5-fill"></i></div>
                        <div className='text-[25px] text-center'>CSS</div>
                        <div className='text-[25px] text-green-700'>50%</div>
                    </div>
                    {/* tag-3 */}
                    <div className=' w-[20%] flex flex-col items-center justify-center px-5 py-2'>
                        <div className='text-4xl text-[#1f1b1b]'><i className="ri-html5-fill"></i></div>
                        <div className='text-[25px] text-center'>JavaScript</div>
                        <div className='text-[25px] text-green-700'>20%</div>
                    </div>
                    {/* tag-4 */}
                    <div className=' w-[20%] flex flex-col items-center justify-center px-5 py-2'>
                        <div className='text-4xl text-[#1f1b1b]'><i className="ri-html5-fill"></i></div>
                        <div className='text-[25px] text-center'>React</div>
                        <div className='text-[25px] text-green-700'>50%</div>
                    </div>
                </div>
            </div>
            {/* contact-section */}
            <div className='my-[50px] md:my-[120px]'>
                {/* text */}
                <div>
                    <p className='text-[#fff] text-[40px] text-center capitalize'>Get in touch</p>
                </div>
                {/* form */}
                <div className='flex flex-col gap-10 mt-[20px] md:mt-[40px] px-[20px] md:px-0'>
                    {/* 1st */}
                    <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                      <input className='px-2 py-1 border-b w-full md:w-[35%]' type='text' placeholder='First Name'></input>
                      <input className='px-2 py-1 border-b w-full md:w-[35%]' type='text' placeholder='Last Name'></input>
                    </div>
                    {/* 2nd */}
                    <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                      <input className='px-2 py-1 border-b w-full md:w-[35%]' type='email' placeholder='E-mail'></input>
                      <input className='px-2 py-1 border-b w-full md:w-[35%]' type='number' placeholder='Phone Number'></input>
                    </div>
                    {/* 3rd */}
                    <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                     <textarea className='px-2 py-1 border w-full md:w-[80%] h-[150px]' placeholder='Message'></textarea>
                    </div>
                    {/* button */}
                    <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                        <button className='text-[#e7e0e0] bg-green-900 px-4 py-2 shadow-2xl cursor-pointer hover:shadow-2xl'>Submit Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
