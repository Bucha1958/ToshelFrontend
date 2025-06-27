import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import Head from '../components/Head';
import Footer from '../components/Footer';
import WhatsappPopUp from '../components/WhatsappPopUp';
import SidebarContact from '../components/SidebarContact';

const FAQ = () => {
    const [ openIndex, setOpenIndex ] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const faqs = [
    {
        question: "What services does Toshel Construction and Equipment Limited offer?",
        answer:
        "Toshel offers services including road construction, bridges, drainage systems, land reclamation, river canalization, dredging, building projects, equipment supply, and facility management.",
    },
    {
        question: "Where is Toshel Construction based?",
        answer:
        "Toshel Construction and Equipment Limited is based in Nigeria and operates across various regions nationwide.",
    },
    {
        question: "Can Toshel handle large-scale infrastructure projects?",
        answer:
        "Yes, Toshel has a proven track record of handling major civil engineering projects. With a large fleet of modern equipment and a skilled team, we’re capable of executing projects of any scale.",
    },
    {
        question: "Does Toshel provide equipment for rent or lease?",
        answer:
        "Yes, Toshel supplies and leases a wide range of construction equipment for different project needs.",
    },
    {
        question: "What makes Toshel different from other construction companies?",
        answer:
        "Toshel offers complete construction solutions—from design to execution. We combine expertise, state-of-the-art equipment, and a client-centric approach to deliver excellence in every project.",
    },
    {
        question: "How do I get in touch for a project consultation?",
        answer:
        "You can contact us via our website's contact form or click the WhatsApp chat icon to speak directly with our team.",
    },
    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
  return (
    <>
        <Head />
        <div className='max-w-[70%] mx-auto font-poppins p-4 mt-[10%]'>
            <h1 className='text-2xl font-semibold mb-4 text-center'>FAQs</h1>
            <div className='text-sm space-x-5 mb-10 text-center mt-10'>
                <span className='hover:text-gray-700 cursor-pointer'><Link to="/">Home</Link></span>
                <FontAwesomeIcon icon={faChevronRight} />
                <span>FAQs</span>
            </div>
            
            
            <div className='space-y-4'>
                {faqs.map((faq, index) => (
                    <div>
                        <button className='w-full border-gray-200 border-b text-left mt-6 flex justify-between' key={index}
                            onClick={() => toggleIndex(index)}
                        >
                            <span>{faq.question}</span>
                            <span>{openIndex !== index ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} /> }</span>
                        </button>
                        {openIndex === index && (
                            <div className='text-sm text-gray-500 mt-6 border-b border-gray-200'>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <WhatsappPopUp />
        <Footer toggleSidebar={toggleSidebar}/>
        <SidebarContact isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        {/* {sidebarOpen && (
            <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
            onClick={toggleSidebar}
            />
        )} */}
    </>
    
  )
}

export default FAQ