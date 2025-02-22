import arrow from '@/assets/projectsArrow.png'
import linkedin from '@/assets/connect-linkedin.png'
import instagram from '@/assets/connect-instagram.png'
import Image from 'next/image'
import Contact from '@/components/Home/Contact'
import LetsChat from '@/components/Home/LetsChat'

const ContactPage = () => {
    return (
        <div className="px-0 lg:px-[70px] pt-[30px] lg:pt-[75px]">
            <Contact />
            <LetsChat />
        </div>
    )
}

export default ContactPage
