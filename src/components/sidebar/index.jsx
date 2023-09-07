import { HiSquares2X2 } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import { IoMdAnalytics } from "react-icons/io";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { IoIosMailOpen } from "react-icons/io";

export default function SideBar() {
    const iconSize = 30;
    const fontWeight = 'bold';
    const navItems = [
        {
            title: 'Home',
            icon: <HiSquares2X2
                size={iconSize}
                color='#746aed'
            />
        },
        {
            title: 'Job Invites',
            icon: <IoIosMailOpen
                size={iconSize}
                color='#b4aef4'
            />
        },
        {
            title: 'Analytics',
            icon: <IoMdAnalytics
                size={iconSize}
                color='#b4aef4'
            />
        },
        {
            title: 'My Profile',
            icon: <CgProfile
                size={iconSize}
                color='#b4aef4'
            />
        },
        {
            title: 'Explore',
            icon: <AiFillDribbbleCircle
                size={iconSize}
                color='#b4aef4'
            />
        },
    ];
    const communityFeedData = [
        {
            title: 'Indonesian UI Desinger',
            members: 720,
            image: 'https://img.freepik.com/premium-vector/man-listening-music-headphones_107173-11067.jpg?w=2000',
        },
        {
            title: 'Indonesia UX Resea...',
            members: 125,
            image: 'https://img.freepik.com/premium-vector/cute-robot-wearing-headphone-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3744.jpg?w=2000',
        },
        {
            title: 'Prototyping Club',
            members: 891,
            image: 'https://media.istockphoto.com/id/1222466621/vector/neon-cyber-dj-or-robot-head-with-outline-electronic-headphones-wireframe-artificial.jpg?s=612x612&w=0&k=20&c=DlH8D9utcy6AFLhVZjVL-qRfTyskbRd9Vbfl4VsmBd8=',
        },
        {
            title: 'Indonesian UI Desinger',
            members: 241,
            image: 'https://img.freepik.com/premium-vector/girl-listens-music-headphones-with-her-eyes-closed-vector-illustration_605517-367.jpg?w=2000',
        },
        {
            title: 'Indonesian UI Desinger',
            members: 720,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-Ro3gnWvcIwTRNxcz-7LoFq2FgQnFGy7Mg&usqp=CAU',
        },
        {
            title: 'Indonesian UI Desinger',
            members: 720,
            image: 'https://cdn-icons-png.flaticon.com/512/6134/6134346.png',
        },
        {
            title: 'Indonesian UI Desinger',
            members: 720,
            image: 'https://cdn-icons-png.flaticon.com/512/6134/6134346.png',
        },
        {
            title: 'Indonesian UI Desinger',
            members: 720,
            image: 'https://cdn-icons-png.flaticon.com/512/6134/6134346.png',
        },
        {
            title: 'Indonesian UI Desinger',
            members: 720,
            image: 'https://cdn-icons-png.flaticon.com/512/6134/6134346.png',
        }
    ];
    const footerOptions = [
        {
            title: 'About'
        },
        {
            title: 'Accessiblilty'
        },
        {
            title: 'Help'
        },
        {
            title: 'Privacy & Terms'
        },
        {
            title: 'Advertise'
        },
        {
            title: 'more'
        },
    ];
    return (
        <div>
            {
                navItems.map((item) => (
                    <div
                        className='p-2 flex flex-row items-center cursor-pointer my-2'
                    >
                        {item.icon}
                        <span
                            className='ml-2 font-semibold text-base'
                        >{item.title}</span>
                    </div>
                ))
            }
            <hr
                className='my-4 h-3'
            />
            <div>
                <h3
                    className='text-xl text-center font-semibold my-2'
                >
                    Communities Feed
                </h3>
                <div
                    className='flex flex-col'
                >
                    {
                        communityFeedData.slice(0, 5).map((item) => (
                            <div
                                className='flex flex-row items-center my-2 cursor-pointer'
                            >
                                <img
                                    src={item.image}
                                    alt=''
                                    className='h-10 w-10 rounded-full'
                                />
                                <div
                                    className='ml-3'
                                >
                                    <p style={{ fontWeight: fontWeight }}>
                                        {item.title}
                                    </p>
                                    <span>
                                        {item.members} members
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                    <span
                        className='mt-5 self-center'
                    >
                        Show {communityFeedData.length - 5} more
                    </span>
                </div>
                <div
                    className='mt-20 flex flex-row flex-wrap justify-center'
                >
                    {
                        footerOptions.map((item) => (
                            <span
                                className='mx-2'
                            >
                                {item.title}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}