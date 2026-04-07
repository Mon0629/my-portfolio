function Experience() {

    return (
        <div className="px-6 sm:px-10 lg:px-24 py-10">

            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
                <div className="w-full flex flex-col justify-start items-start mt-6 gap-4">
                    <h1 className="text-4xl font-bold text-white">Experience</h1>
                    <p className="text-lg text-white/50 text-justify">Raymond has recently worked as a Software Engineer Intern at Mines and Geoscines Bureau </p>
                </div>

                <div className="w-full flex flex-col justify-start items-start mt-6 gap-2">
                    <div className="w-full flex flex-row gap-2">

                        <div className="w-full flex justify-start items-start">
                            <h1 className="text-2xl font-bold text-white">Mines and Geosciences Bureau</h1>
                        </div>
                        <div className="w-full flex justify-start items-start gap-2">
                            <p className="text-md text-white/50 text-justify">May-Sept 2025</p>
                        </div>

                    </div>
                    <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-2">
                        <p className="text-lg text-white/50 text-justify">Software Engineer Intern</p>
                        <p className="text-md text-white/50 text-justify">May-Sept 2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;