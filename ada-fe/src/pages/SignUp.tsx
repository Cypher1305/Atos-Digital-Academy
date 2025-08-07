import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";

export default function SignUp () {
return (
<>
    <div className="text text-gray-500 min-h-screen flex flex-col justify-center items-center p-4 mx-auto sm:p-8 gap-5">
        <Header />

        <div className="h-auto w-screen flex justify-center items-center">
            <div className="grid gap-5">
                <div
                    className="border-gray-400 bg-[#101010] rounded-[29px] shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-1">
                    <h1 className="pt-8 pb-6 font-bold text-3xl text-center text-gray-400 cursor-default">
                        Create an account
                    </h1>
                    <form action="#" method="post" className="space-y-4">
                        <div>
                            <label htmlFor="name" className="mb-2 text-xl">Full Name</label>
                            <input id="name"
                                className="border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                type="text" placeholder="Your full Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 text-xl">Email</label>
                            <input id="email"
                                className="border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                type="email" placeholder="Your email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-2 dark:text-gray-400 text-xl">Password</label>
                            <input id="password"
                                className="border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                type="password" placeholder="Your strong password" required />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="mb-2 text-xl">
                                Confirm Password
                            </label>
                            <input id="confirmPassword"
                                className="border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                type="password" placeholder="Confirm Your Password" required />
                        </div>

                        <button
                            className="bg-gradient-to-r from-blue-500 to-pink-700 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                            type="submit">
                            SIGN UP
                        </button>
                    </form>
                    <div className="flex flex-col mt-4 items-center justify-center text-sm">
                        <h3 className="text-gray-500">
                            Already have an account?
                            <Link className="group text-blue-400 transition-all duration-100 ease-in-out" to="/signin">
                                <span
                                    className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                    Sign In
                                </span>
                            </Link>
                        </h3>
                    </div>

                    <div id="third-party-auth" className="flex items-center justify-center mt-5 flex-wrap">
                        <button
                            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                            <img className="max-w-[25px]"
                                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
                        </button>
                        <button
                            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                            <img className="max-w-[25px]"
                                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="Linkedin" />
                        </button>
                        <button
                            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                            <img className="max-w-[25px] filter dark:invert"
                                src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="Github" />
                        </button>
                    </div>

                    <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                        <p className="cursor-default">
                            By signing in, you agree to our
                            <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                                <span
                                    className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                    Terms
                                </span>
                            </a>
                            and
                            <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                                <span
                                    className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                    Privacy Policy
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</>
);
};
