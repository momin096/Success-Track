
const Appointment = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.date.value = '';
        e.target.time.value = '';
        e.target.message.value = '';
    }
    return (
        <div className="">
            <div className="flex flex-col md:flex-row items-center justify-between bg-base-100 p-10 shadow-xl rounded-2xl min-h-[calc(100vh-142px)]">
                <div className="md:w-1/2 p-5">
                    <h2 className="text-3xl font-bold text-primary">Make an Appointment</h2>
                    <p className="text-gray-500 mt-2">
                        Schedule a session with us and take the next step towards success.
                    </p>
                    <div className="mt-5 space-y-3">
                        <div className="flex items-center space-x-3">
                            <span className="text-primary"><i className="fas fa-envelope"></i></span>
                            <span>contact@succestrack.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-primary"><i className="fas fa-phone"></i></span>
                            <span>+880 1234-500000</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 bg-white p-5 shadow-lg rounded-xl">
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="flex gap-4">
                            <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" />
                            <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        </div>
                        <div className="flex gap-4">
                            <input name="date" type="date" className="input input-bordered w-full" />
                            <input name="time" type="time" className="input input-bordered w-full" />
                        </div>
                        <textarea name="message" placeholder="Your Message" rows='10' className="textarea textarea-bordered w-full"></textarea>
                        <button className="btn btn-primary w-full">Make an Appointment</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Appointment;