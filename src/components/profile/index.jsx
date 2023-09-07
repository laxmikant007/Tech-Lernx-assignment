import CoverOne from "../../assets/img/banner.jpg"
import { AiFillEdit } from 'react-icons/ai';
import { IoBag } from 'react-icons/io5';
import { FaGraduationCap } from 'react-icons/fa';
import wheel from "../../assets/img/wheel.png";
import { IoIosPeople } from 'react-icons/io';
const Profile = () => {
    return (
        <>
            <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark " >

                <div className="relative z-20 h-25 md:h-65">
                    <img
                        src={CoverOne}
                        alt="profile cover"
                        className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3  ">
                    <div className="p-4 col-span-1 ">
                        <div className="text-lg font-bold">


                            <div className="flex flex-col align items-center justify-center ">
                                <img
                                    src="https://as1.ftcdn.net/v2/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
                                    alt=''
                                    className='h-40 w-40 rounded-full'
                                />

                                <h1>Laxmikant Saraswat</h1>
                                <h6>UI/UX Designer</h6>
                                <div className="flex flex-row mt-2 justify-center align-center border border-stroke p-2 ">

                                    <IoIosPeople size={24} color='#353148' className="mx-2" />
                                    <p >21 followers 23 following</p>
                                </div>


                            </div>

                            <div className="flex flex-row mt-2 justify-between p-4  border border-stroke   ">

                                <p>Make my profile visitie to </p>

                                <label className=" mx-10 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-400 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white-600 peer-checked:bg-blue-600"></div>

                                </label>



                            </div>

                            <div className="mt-4 border border-stroke p-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit recusandae! Laudantium, unde!
                            </div>

                            <div className="flex flex-row mt-2 justify-between p-5 align-center border border-stroke">

                                <p>Online Links</p>

                                <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                    <AiFillEdit size={24} />
                                </div>



                            </div>

                            <div className="mt-4  flex flex-row m-4 justify-center justify-evenly ">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVv8swnTD7ULa1BSaM1TTOT5Lk6AUay7LIzUvDgF8a&s"
                                    alt=''
                                    className='h-10 w-10 rounded-full'
                                />
                                <img
                                    src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397190105/5e103d9c1b0c688a4a2813e76176e663.png"
                                    alt=''
                                    className='h-10 w-10 rounded-full'
                                />
                                <img
                                    src="https://png.pngtree.com/png-clipart/20200805/ourmid/pngtree-cross-shape-in-blue-square-logo-png-image_2318660.jpg"
                                    alt=''
                                    className='h-10 w-10 rounded-full'
                                />
                            </div>

                            <div className="mt-4 flex flex-col p-5 border border-stroke">

                                <p className="text-center my-2">Wheel Of Opporunities </p>

                                <img
                                    src={wheel}
                                    alt='wheel'
                                    className='h-50 w-50 rounded-full'
                                />




                            </div>

                            <div className="mt-4">
                                <p className="my-4">Your Ranking</p>
                                <input type="range" min={0} max="100" value="40" className="range w-full h-5" />

                                <p>Hurry  You are  in top 27% </p>
                            </div>



                        </div>

                    </div>
                    <div className="p-4 col-span-2 border-l  bg-white-50 dark:bg-white-700">
                        <div className="flex justify-between">


                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-40 text-lg">
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-black underline" aria-current="page">About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-black hover:underline">Skills & Certificates</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-black hover:underline">Posts</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-black hover:underline">Spaces</a>
                                </li>
                            </ul>

                        </div>
                        <hr />
                        <div className="mt-4 p-4 flex ">
                            <div>
                                The discovery wos mode by Richard McClintock , a professor Of Latin at Hompdem
                                Sydney College in Vfrginic. who faced the impetuous recurrence of the dork word
                                cansectetur in the text Lorem ipsum researched its origins to identify them in seetions
                                1.10.32 and 1.1033 of the aforementioneFF
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore veritatis minus magnam iure neque, itaque, ducimus illo perferendis hic quaerat omnis architecto assumenda facilis nisi earum qui modi laboriosam doloribus sapiente voluptates. Aperiam accusantium, fugit omnis ex ducimus minima.

                            </div>

                            <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                <AiFillEdit size={24} />
                            </div>


                        </div>
                        <hr />
                        <div className="mt-4 p-4">
                            <h1 className="font-bold text-2xl mb-4">Experience</h1>
                            <div className="flex">
                                <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                    <IoBag size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-lg mb-4">Crisis Intervention Specialist</p>
                                    <h1 className="font-bold text-sm mb-4">January 2023 - Present
                                        Icoéegz- Iryc-tl</h1>
                                    <h1 className="font-bold text-sm mb-4">Crisis Intervention Specialist</h1>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo temporibus molestias sint assumenda pariatur. Nam eum deleniti sapiente odit corporis beatae dicta, quod cumque enim non modi molestias id, ipsum harum?


                                </div>


                                <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                    <IoBag size={24} />



                                </div>
                                <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                    <IoBag size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-4">
                            <h1 className="font-bold text-2xl mb-4">Education</h1>
                            <div className="flex">
                                <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                    <FaGraduationCap size={24} />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-lg mb-4">- Electronics & Telecommunication Engg-</p>
                                    <h1 className="font-bold text-sm mb-4">January 2023 - Present
                                        Icoéegz- Iryc-tl</h1>
                                    <h1 className="font-bold text-sm mb-4">Crisis Intervention Specialist</h1>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo temporibus molestias sint assumenda pariatur. Nam eum deleniti sapiente odit corporis


                                </div>
                                <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                    <IoBag size={24} />
                                </div>
                                <div style={{ backgroundColor: '#867eff' }} className="ml-4  rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer">
                                    <IoBag size={24} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
