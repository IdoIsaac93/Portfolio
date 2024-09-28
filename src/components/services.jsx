//Services - Ido Isaac - 301374969 - 09.26.2024
import { NavLink } from 'react-router-dom';

export default function Services() {
    return (
        <>
        <div id="content">
            <h2>Services</h2>
            <p>As a passionate game programmer, I offer a range of services to help bring your game ideas to life. My expertise includes:</p>
            <ul>
                <li><strong>Game Programming:</strong> Proficient in Unity and Unreal Engine for developing high-quality games.</li>
                <li><strong>Game Design:</strong> Crafting engaging gameplay mechanics and user experiences.</li>
                <li><strong>Worldbuilding:</strong> Creating immersive worlds with rich narratives and environments.</li>
                <li><strong>Web Design and Coding:</strong> Designing and coding responsive websites to showcase your projects.</li>
            </ul>
            <p>If you're interested in collaborating or have any questions, feel free to <NavLink to="/contact" activeclassname="active-link">reach out!</NavLink></p>
        </div>
        </>
    );
}
