import React from 'react'
import "./About.css"
import "../../Assets/fontStyles.css"
import ProfileImg from "../images/profileImg1.png"

const About = () => {
    return (
        <>
            <div className="about_container">
                <div className="inner_container">
                    <p className="intro_section_content1 font600">Aman Rawat</p>
                    <p className="intro_section_content2 font200">Full Stact Developer</p>
                    <div className="about_intro_section">
                        <div>
                            <p className="intro_section_content3 font300">Lorem Lorem ip, exercitationem laborum  quod consectetur ullam, harum mollitia suscipit laudantium aut enim incidunt perferendis eveniet ut facere. Tenetur libero molestiae perferendis error esse ducimus iusto, saepe, velit nemo eos sint dicta ipsum. Illo praesentium, adipisci laudantium minus ad laboriosam nesciunt quam accusantium sequi inventore, veritatis quaerat veniam culpa! Nobis quisquam earum quo repellat quas, totam asperiores quidem quis quaerat voluptate, veritatis consequatur suscipit, non voluptatibus dolores in. Reiciendis est provident eligendi minima nam at laborum, hic impedit dignissimos excepturi magnam obcaecati quia ea ad beatae quas consectetur nulla iste aliquid accusamus pariatur nemo deserunt blanditiis odio? Mollitia unde consequuntur facilis accusamus aliquam, nam corrupti at ullam porro maiores magni itaque sed, nihil velit! Modi totam vel cum!ipsum dolor, sit amet consectetur adipisicing elit. Pariatur molestias inventore ipsam, eaque est, similique id repellat totam sint ex qui nulla error earum, omnis quis. Delectus, quas. Ea iure, commodi reiciendis corporis fugit aliquam esse maxime in unde tenetur, excepturi nesciunt, cum numquam adipisci quasi dolore? Minus in dignissimos quaerat quasi tempora, impedit deleniti!</p>
                        </div>
                        <div>
                            <img className="profileImage" src={ProfileImg} alt="profileImg" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About;
