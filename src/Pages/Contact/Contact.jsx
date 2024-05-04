import React from 'react';
import Logo from '../../logo';

const Contact = () => {
    return (
        <div>
            <div className='container mx-auto '>
                <div className="container my-12 mx-auto px-2 md:px-4">
                    <section className="mb-32">
                        <div className="flex justify-center">
                            <div className="text-center md:max-w-xl lg:max-w-3xl">
                                <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                <div className="mb-3 w-full">
                                    <label
                                        className="block font-medium mb-[2px] text-teal-700"

                                    >
                                        Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="px-2 py-2 border w-full outline-none rounded-md"
                                        id="exampleInput90"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-3 w-full">
                                    <label
                                        className="block font-medium mb-[2px] text-teal-700"

                                    >
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        className="px-2 py-2 border w-full outline-none rounded-md"
                                        id="exampleInput90"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div className="mb-3 w-full">
                                    <label
                                        className="block font-medium mb-[2px] text-teal-700"

                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="px-2 py-2 border rounded-[5px] w-full outline-none"
                                        name=""
                                        id=""
                                        defaultValue={""}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
                                >
                                    Send
                                </button>
                            </form>
                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold">Technical support</p>
                                                <p className="text-neutral-500 ">travelguru@example.com</p>
                                                <p className="text-neutral-500 ">0156324565</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Service Question</p>
                                                <p className="text-neutral-500 ">travel_service@example.com</p>
                                                <p className="text-neutral-500 ">01312569874</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Press</p>
                                                <p className="text-neutral-500 ">press@example.com</p>
                                                <p className="text-neutral-500 ">+1 234-567-89</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <div>
                <div className="container my-12 mx-auto px-2 md:px-4">

</div>

            </div>
            <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
        <img className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 !h-48 !w-48" 
        src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/440167534_1507756503156615_2509235678813632215_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8EARDjNMh3NGKUJm4v9fkivnDRItHjzOK-cNEi0ePM7gaXXQ-dFdrx6heqfbVvyRdtkV6ioF7v3axVUctTM7V&_nc_ohc=Mw5kikLC9TYQ7kNvgFOmgmV&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfD3R39W0dotIUrAUo310f24hAnZ91zpfZSWiDDZtk_ecQ&oe=663C0E9A" alt="" />
        <h1 className="text-2xl text-gray-500 font-bold mt-2">
          Irfan Chowdhury Masud
        </h1>
        <h2 className="text-base md:text-xl text-gray-500 font-bold">
         Developer
          
        </h2>
        <ul className="flex flex-row mt-2">
          <li className="mx-2">
            <a href="https://github.com/Murad-Takla" target="_blank" aria-label="GitHub">
              <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                </path>
              </svg> </a>
          </li>
          <li className="mx-2">
            <a href="https://www.linkedin.com/in/md-irfan-chowdhury-5ab863286/" target="_blank" aria-label="LinkedIn">
              <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                </path>
              </svg> </a>
          </li>
          <li className="mx-2">
           
          </li>
       
        
        </ul>
      </header>

        </div>
    );
};

export default Contact;