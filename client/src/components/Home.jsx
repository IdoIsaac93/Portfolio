//Home - Ido Isaac - 301374969 - 09.26.2024
import { NavLink } from 'react-router-dom';

//Function to calculate my age
export default function Home() {
    //My birthday
    const birthDate = new Date('1993-08-22');
    const today = new Date();
    //calculates age disregarding months
    const age = today.getFullYear() - birthDate.getFullYear();
    //Checks if my birthday has occured this year by comparing days and months
    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    //Reduces 1 year from age if birthday hasn't passed this year
    const finalAge = hasBirthdayPassed ? age : age - 1;

    return (
        <div id="content">
            <h3>Hello World!</h3>
            <h1>Welcome to My Portfolio!</h1>
            <p>
                Hello! My name is <NavLink to="/about" activeclassname="active-link">Ido Isaac</NavLink>, and I am {finalAge} years old. 
                I am a passionate aspiring game designer currently studying at Centennial College in Canada.
            </p>
            <h2>Mission Statement</h2>
            <p>
                My mission is to create immersive and engaging gaming experiences that captivate players 
                and foster creativity. I have a deep love for fantasy and sci-fi, and I am very keen on worldbuilding 
                and crafting in-depth stories. My goal is to capture my fans with thrilling tales and rich 
                narratives that draw them into unique worlds.
            </p>
            <h2>Summary of Abilities</h2>
            <p>
                I have a solid foundation in programming languages including <span><b>C#</b></span>, <span><b>JavaScript</b></span>, 
                and <span><b>Java</b></span>. My primary focus is on <span><b>Unity</b></span>, where I have worked on several game projects 
                that highlight my skills in game design and development. I am eager to learn, innovate, and 
                contribute to the gaming industry.
            </p>
        </div>
    );
}