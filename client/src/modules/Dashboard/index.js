import Avatar from '../../assets/avatar.jpeg';
import Phonecall from '../../assets/phone-call.svg';
import Send from '../../assets/send.jpeg';
import Plus from '../../assets/plus.png';
import Input from '../../components/input';
import React from 'react';

const Dashboard = () => {
    const contacts =[
        {
            name:'John',
            status: 'Available',
            img:Avatar
        },
        {
            name:'Marry',
            status: 'Available',
            img:Avatar
        },
        {
            name:'Harry',
            status: 'Available',
            img:Avatar
        },
        {
            name:'Lisa',
            status: 'Available',
            img:Avatar
        },
        {
            name:'Mark',
            status: 'Available',
            img:Avatar
        },

    ]
  return (
    <div className='flex w-screen '>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex items-center my-8 mx-14'>
                <div className= 'border border-primary p-[2px] rounded-full'><img src= {Avatar} width={75} height={75}/></div>
                <div className='ml-8'>
                    <h3 className='text-2xl'>Tutorials Dev</h3>
                    <p className='text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr/>
            <div className='mt-10 mx-14'>
                <div className='text-lg text-primary'>Messages</div>
                <div>
                    {
                        contacts.map(({name,status,ig})=>{
                            return(
                                <div className='flex items-center py-8 border-b border-b-gray-300'>
                                    <div className='flex items-center cursor-pointer'>
                <div  ><img src= {Avatar} width={60} height={60}/></div>
                <div className='ml-6'>
                            <h3 className='text-lg font-semibold'>{name}</h3>
                            <p className='text-sm font-light text-gray-600'>{status}</p>
                            </div>
                            </div>
                            </div>
                            )
                    })
                }    
                </div>
            </div>
        </div>
        <div className='w-[50%]  h-screen bg-white flex flex-col items-center'>
            <div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 '>
                <div className='cursor-pointer'><img src= {Avatar} width={60} height={60}/></div>
                <div className='ml-6 mr-auto'>
                <h3 className='text-lg'>Harry</h3>
                <p className='text-sm font-light text-gray-600'>online</p>
                </div>
                <div className='cursor-pointer'>
                    <img src={Phonecall} width={24} height={24}></img>
                </div>
            </div>
            <div className='h-[75%]  w-full overflow-scroll shadow-sm' >
                <div className=' p-14'>
                    
                <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>
                    <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        Hi,Rohit
                    </div>
                    <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Hi, Rajat Are you giving paid services
                    </div>

                </div>
            </div>
            <div className='flex items-center w-full p-14'>
                <Input placeholder='Type a message....' className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
                <div className= 'p-2 ml-4 rounded-full cursor-pointer bg-light'>
                    <img src={Send} width={30} height={30}/>
                </div>
                <div className= 'p-2 ml-4 rounded-full cursor-pointer bg-light'>
                    <img src={Plus} width={30} height={30}/>
                    </div>
            </div>
        </div>
        <div className='w-[25%]  h-screen bg-light'></div>
    </div>
  );
}

export default Dashboard;
