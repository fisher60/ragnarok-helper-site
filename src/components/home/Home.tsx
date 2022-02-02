import "./Home.css";
import groupPhoto from "./blob2.png";

export const Home = () => {
    return (
        <div className="flex items-center lg:items-start flex-col lg:flex-row content-center w-full">
        
            <div className="lg:flex lg:pt-5 lg:pb-20 flex-col lg:flex-row bg-white lg:text-white lg:bg-blue-700">
                <div className="flex w-full items-center flex-col lg:ml-16 lg:mr-8 lg:w-2/4 lg:mt-5">
                    <img className="w-full lg:mt-5 lg:rounded-md" src={groupPhoto} />
                </div>

                <div className="hidden lg:block w-5/6 mt-10 mb-10 lg:ml-8 lg:mr-16 lg:w-2/4">
                    <p className="text-2xl mt-5 text-left leading-10">
                        Have you ever craved adventure? Interested in making some new friends? Maybe you are just tired of dying over and over again to that pesky boss?  
                        We are here to help!
                        <br />
                        <br />
                        
                         Come join us at the Sleepy Kitty Guild, where we play for more than just the game.
                    </p>
                </div>

            </div>
                <div className="block lg:hidden w-5/6 mt-10 mb-10 lg:ml-8 lg:mr-16 lg:w-2/4">
                    <p className="text-2xl text-left leading-9">
                        Have you ever craved adventure? Interested in making some new friends? Maybe you are just tired of dying over and over again to that pesky boss?  
                        We are here to help!
                        <br />
                        <br />
                        
                         Come join us at the Sleepy Kitty Guild, where we play for more than just the game.
                    </p>
                </div>
        </div>
    );
}