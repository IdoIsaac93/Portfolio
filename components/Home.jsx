export default function Home() {
    const birthDate = new Date('1993-08-22');
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    const finalAge = hasBirthdayPassed ? age : age - 1;

    return (
        <div id="homeContent">
            <h3>Hello World!</h3>
            <h1>Welcome to My Portfolio!</h1>
            <p>
                Hello! My name is <b>Ido Isaac</b>, and I am {finalAge} years old. 
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
                I have a solid foundation in programming languages including <b>C#</b>, <b>JavaScript</b>, 
                and <b>Java</b>. My primary focus is on <b>Unity</b>, where I have worked on several game projects 
                that highlight my skills in game design and development. I am eager to learn, innovate, and 
                contribute to the gaming industry.
            </p>
        </div>
    );
}