import avatar from "../assets/logo-pic.png";

function AboutMe() {
    return (
        <div className="px-6 sm:px-10 lg:px-24 py-10">
            <div className="w-full flex justify-start items-center ">
                <h1 className="text-4xl font-bold text-white">About Me</h1>
            </div>
            <div className="w-full flex justify-start items-start mt-6">
                <p className="text-lg text-white/50 text-justify"><span className="text-white">Raymond</span> is a software engineer with a passion for building web applications and mobile apps. He finished a degree in <span className="text-white">Computer Science</span> and aspire to become a cybersecurity analyst and cloud engineer. He excels in <span className="text-white">creating secure and intelligent system</span> that not only solves realworld problems but also enhances the user experience.</p>
            </div>
           <div className="w-full flex justify-start items-center mt-6 gap-2">
            <img src={avatar} alt="avatar" className="w-15 h-15" />
            <div className="flex flex-col justify-start items-start">
                <p className="text-md font-bold text-white">Raymond Palomares</p>
                <p className="text-sm text-white/50">Software Engineer | Cybersecurity Analyst</p>
            </div>
           </div>
        </div>
    )
}

export default AboutMe;