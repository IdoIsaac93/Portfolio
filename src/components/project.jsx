//Project - Ido Isaac - 301374969 - 09.26.2024
import React, { useState } from 'react';

//State of modal, which is the enlarged picture box
export default function Project() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Method for enlarginf the image size, opening the modal
    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    //Method for closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div id="content">
                <h2>My Projects</h2>
                <br />
                <h3>Monster Hunter - Lead Developer</h3>
                <p>This was my first project using the Unity game engine, completed individually 
                    for my game design class at Centennial College. I took on the entire 
                    process—designing, coding, and building the game myself. Throughout development, 
                    I encountered numerous challenges and made several mistakes, but each one 
                    became a valuable learning experience. As a result, my subsequent projects 
                    have been more polished and of a higher caliber.</p>
                <video controls width="600">
                    <source src="/MonsterHunter3D-DemoVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p>
                    For an in-depth explanation of the project, you can download this 
                    <a href="/MonsterHunter-Presentation.pptx" target="_blank" rel="noopener noreferrer"> Presentation</a>.
                </p>
                <br /><br />
                <h3>Calculator - Programmer</h3>
                <p>During my studies in C# programming, I was tasked with developing a fully 
                    functional calculator. This project showcased my understanding of coding 
                    principles, as well as my ability to implement design and UI/UX concepts 
                    in my applications. I received top marks for this assignment, and it was 
                    selected as an example of exemplary coding practices.</p>
                <video controls width="600">
                    <source src="/IdoIsaac_CalculatorDemo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <br /><br /><br /><br />
                <h3>Bowie - Lead Developer</h3>
                <p>This is my current project, an innovative archery game developed using the 
                    Unity game engine. As the lead developer, I am responsible for designing 
                    the levels and mechanics, and I handle all coding and programming myself. 
                    This project allows me to explore creative game design elements and push 
                    the boundaries of traditional gameplay. Although it is still in progress, 
                    I am excited about the unique features and engaging experiences that will 
                    come to life as development continues.</p>
                <img 
                    src="/BowieDemo.png" 
                    alt="Bowie Archery Game Demo" 
                    width="600" 
                    onClick={handleImageClick} 
                    style={{ cursor: 'pointer' }} 
                />
                <br />
                <h4>
                    Stay tuned for updates on all my projects as I continue to refine them and add new features!
                </h4>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <img 
                        src="/BowieDemo.png" 
                        alt="Bowie Archery Game Demo" 
                        className="modal-image" 
                    />
                </div>
            )}
        </>
    );
}