import Avatar from '../../assets/avatar.jpeg';
import Phonecall from '../../assets/phone-call.svg';
import Send from '../../assets/send.jpeg';
import Plus from '../../assets/plus.png';
import Input from '../../components/input';
import React, { useEffect, useState } from 'react';


const Dashboard = () => {
 const [user,setUser] =useState(JSON.parse(localStorage.getItem('user:detail')))
    const [conversation, setConversation]=useState([])
    const [messages, setMessages]=useState({})
    console.log('user :>>',user) 
    console.log('conversation :>>',conversation);
    console.log('messages :>>',messages);

    useEffect(()=>{
        const loggedInUser =JSON.parse(localStorage.getItem('user:detail'))
        const fetchConversations = async()=>{
            const res = await fetch(`http://localhost:8000/api/conversation/${loggedInUser?.id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resData =await res.json()
            setConversation(resData) 
        }
        fetchConversations()
    },[])

const fetchMessages =async(conversationId ,user)=>{
    const res =await fetch(`http://localhost:8000/api/message/${conversationId}`,{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
        }
    });
    const resData =await res.json()
    console.log('resData :>>',resData);
    setMessages({messages: resData,receiver: user})
}

  return (
    <div className='flex w-screen '>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex items-center my-8 mx-14'>
                <div className= 'border border-primary p-[2px] rounded-full'><img src= {Avatar} width={75} height={75}/></div>
                <div className='ml-8'>
                    <h3 className='text-2xl'>{user?.fullName}</h3>
                    <p className='text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr/>
            <div className='mt-10 mx-14'>
                <div className='text-lg text-primary'>Messages</div>
                <div>
                    {
                        conversation.length>0? 
                        conversation.map(({conversationId,user})=>{
                            return(
                                <div className='flex items-center py-8 border-b border-b-gray-300'>
                                    <div className='flex items-center cursor-pointer'onClick={()=> fetchMessages(conversationId)}>
                <div  ><img src= {Avatar} width={60} height={60}/></div>
                <div className='ml-6'>
                            <h3 className='text-lg font-semibold'>{user?.fullName}</h3>
                            <p className='text-sm font-light text-gray-600'>{user?.email}</p>
                            </div>
                            </div>
                            </div>
                            )
                    }) : <div className ='mt-24 text-lg font-semibold text-center'>No Conversations</div>
                }    
                </div>
            </div>
        </div>
        <div className='w-[50%]  h-screen bg-white flex flex-col items-center'>
        {
            messages?.receiver?.fullName &&
            <div className='w-[75%] bg-secondary h-[80px]my-14 rounded-full flex items-center px-14 py-2'>
                <div className='cursor-pointer'>
                    <img src={ Avatar} alt='User picture' width={60} height={60} className='rounded-full' /></div>
                    <div className='ml-6 mr-auto'>
                        <h3 className= 'text-lg'>{messages?.receiver?.fullName}</h3>
                        <p className='text-sm font-light text-gray-600'>{messages?.receiver?.email}</p>
                        </div>
                        <div className= 'cursor-pointer'>
                            <img src= {Phonecall} alt='Phone call picture' width={24} height={24} className='rounded-full'></img>
                            </div>
            </div>
            
        }
            <div className='h-[75%]  w-full overflow-scroll shadow-sm' >
                <div className=' p-14'>
                    
                
                    
                    {
                        messages?.messages?.length>0?
                        messages.messages.map(({message,user :{id}={}})=>{

                            return(
                                <div className={` max-w-[40%] rounded-b-xl   p-4  mb-6 ${id=== user?.id ? 'bg-primary ml-auto rounded-tl-xl text-white':'bg-secondary rounded-tr-xl'}`}>{message}</div>
                            ) 
                        }): <div className='mt-24 text-lg font-semibold text-center'>No Messages</div>
                    }

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
