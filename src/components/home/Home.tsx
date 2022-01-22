import "./Home.css";
import groupPhoto from "./blob2.png";

export const Home = () => {
    return (
        <div className="flex items-center lg:items-start flex-col lg:flex-row content-center w-full">
            <div className="lg:ml-16 lg:mr-8 w-2/4">
                <h1 className="text-4xl">Title</h1>
                <img className="w-full lg:w-5/6" src={groupPhoto} />
            </div>
            <div className="lg:ml-8 lg:mr-16 w-2/4">
                <h1 className="text-4xl">Info</h1>
                <p>
                    This is where I tell you all about our fancy guild. It has perks--probably. Like friendship and dog pics and... baking advice? Idk, just join us and we will be
                    nice to you. Except on Wednesdays--on Wednesdays you can't sit with us.

                    The world is a big and scary place. Don't talk to anyone ever, then you wil be safe. The internet is your only true friend. So stay on our website.
                    And buy our products. Give us ad revenue. Very many words here. This is the worst part of web dev. I am putting my 90wpm to good use. That should be 100wpm though.
                    I should reallypractice and step up my typing game. What is sitting at the computer literally all day good for if not to be show off my *maybe* slightly above
                    average typing skills.
                </p>
            </div>
        </div>
    );
}