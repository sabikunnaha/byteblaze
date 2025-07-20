import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero -bottom-10 ">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold">
                        Wellcome to  <span className=" bg-gradient-to-r bg-300% from-pink-400 via-blue-500 to-blue-300 text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span></h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi.
                    </p>
                    <div className="flex gap-2 justify-center items-center">
                        <Link  to={'/blog'} className="relative inline-block px-4 py-2 font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                        <span className="relative text-black group-hover:text-white">Read Blogs</span>
                    </Link>
                    <Link  to={'/Bookmark'} className="relative inline-block px-4 py-2 font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                        <span className="relative text-black group-hover:text-white">Bookmarks</span>
                    </Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Hero;