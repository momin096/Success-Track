import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdPlayArrow } from "react-icons/md";

const SuccessProcess = () => {
    return (
        <div className="flex justify-between items-center gap-10 bg-base-200 px-2 py-10 my-20 rounded-xl">
            <div className="flex-1">
                <h2 className="text-5xl font-semibold mb-5">Step by step process for achieving success</h2>
                <ul className="text-xl">
                    <li className="flex items-center gap-2"><HiOutlineArrowNarrowRight />Personal and Professional Success</li>
                    <li className="flex items-center gap-2"><HiOutlineArrowNarrowRight />Your Potential with Expert Coaching</li>
                    <li className="flex items-center gap-2"><HiOutlineArrowNarrowRight />Tailored Strategies for Growth</li>
                    <li className="flex items-center gap-2"><HiOutlineArrowNarrowRight />Empowering Your Journey Success</li>
                </ul>
            </div>
            <div className="flex-1 space-y-5">
                <div>
                    <h2 className="text-2xl font-semibold flex items-center"><MdPlayArrow /> Assessment</h2>
                    <p className="pl-6">The Assessment section helps users identify the best career path based on their skills, interests, and personality traits. It provides quizzes and tests to guide users toward suitable careers</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold flex items-center"><MdPlayArrow /> Goal Setting</h2>
                    <p className="pl-6">The Goal Setting section will help users set, track, and achieve their career goals step by step. It will guide them through defining objectives, breaking them into actionable steps, and tracking their progress</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold flex items-center"><MdPlayArrow /> Coaching Session</h2>
                    <p className="pl-6">The Coaching Sessions section connects users with career mentors, industry experts, and professional coaches to help them navigate their career journey. Users can book one-on-one or group coaching to receive guidance on career planning, skill development, job applications, and industry insights</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold flex items-center"><MdPlayArrow /> Ongoing Support</h2>
                    <p className="pl-6">The Ongoing Support section ensures that users receive continuous guidance and motivation throughout their career journey. This feature helps users stay on track with their career goals by providing regular check-ins, mentorship, and access to a supportive community</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessProcess;