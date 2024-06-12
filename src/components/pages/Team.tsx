import React, { useEffect } from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";
import GridLayout from "react-grid-layout";
import Background from "../../img/team.webp";
import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

function Team(props: {}) {
    const theme = useTheme();
    const navigate = useNavigate();

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
        { i: "c", x: 2, y: 0, w: 1, h: 1, static: true },
        { i: "d", x: 0, y: 1, w: 1, h: 1, static: true },
        { i: "e", x: 1, y: 1, w: 1, h: 1, static: true },
        { i: "f", x: 2, y: 1, w: 1, h: 1, static: true },
        { i: "g", x: 0, y: 2, w: 1, h: 1, static: true },
        { i: "h", x: 1, y: 2, w: 1, h: 1, static: true },
    ];

    const Alumni_layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
        { i: "c", x: 2, y: 0, w: 1, h: 1, static: true },
        { i: "d", x: 0, y: 1, w: 1, h: 1, static: true },
        { i: "e", x: 1, y: 1, w: 1, h: 1, static: true },
        { i: "f", x: 2, y: 1, w: 1, h: 1, static: true },
        { i: "g", x: 0, y: 2, w: 1, h: 1, static: true },
        { i: "h", x: 1, y: 2, w: 1, h: 1, static: true },
        { i: "i", x: 2, y: 2, w: 1, h: 1, static: true },
        { i: "j", x: 0, y: 3, w: 1, h: 1, static: true },
        { i: "k", x: 1, y: 3, w: 1, h: 1, static: true },
        { i: "l", x: 2, y: 3, w: 1, h: 1, static: true },
    ];

    useEffect(() => {
        theme.setLoadState(-2);
    }, [theme]);

    return (
        <div className="apex-users w-100 h-100 col-cc">
            <AnimatePresence>
                {theme.loadState === -2 && (
                    <motion.div
                        className="document col-st"
                        variants={Anim.bounceY(1200).spring(240, 0, 30).build()}
                        initial="inactive"
                        animate="active"
                        exit="inactive"
                    >
                        <div
                            className="h0 oxanium bold col-cc"
                            style={{
                                backgroundImage: `url(${Background})`,
                                backgroundSize: "100% auto",
                                backgroundPosition: "50% 50%",
                            }}
                        >
                            Meet Our Team
                        </div>
                        <div className="alumni-title">
                            <h2 className="h2 oxanium bold">Current Members</h2>
                        </div>
                        <GridLayout
                            className="layout"
                            layout={layout}
                            cols={3}
                            rowHeight={450}
                            width={1335}
                            containerPadding={[20, -10]}
                            margin={[20, 5]}
                        >
                            <div key="a">
                            <div className="profile">
                                    <img src={require("../../img/lueken.jpg")} />
                                    <figcaption className="name oxanium bold">
                                        Adam Lueken 
                                        <div className="icons">
                                            <a href="mailto:adam.lueken@d128.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/adam-lueken-37455a8/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="b">
                                <div className="profile">
                                    <img src={require("../../img/Rohit2.png")} />
                                    <figcaption className="name oxanium bold">
                                        Rohit Dashaputra
                                        <div className="icons">
                                            <a href="mailto:rohit.dashaputra@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/rohit-dashaputra-9646312a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="c">
                                <div className="profile">
                                    <img src={require("../../img/Om_Image2.png")} />
                                    <figcaption className="name oxanium bold">
                                        Om Kotwal
                                        <div className="icons">
                                            <a href="mailto:om.kotwal@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/omkotwal/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="d">
                                <div className="profile">
                                    <img src={require("../../img/Juno2.png")} />
                                    <figcaption className="name oxanium bold">
                                        Juno Lee
                                        <div className="icons">
                                            
                                            <a href="mailto:juno.lee@vhhscougars.org"target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                        </GridLayout>
                        <div className="alumni-title">
                            <h2 className="h2 oxanium bold">Our Alumni</h2>
                        </div>
                        <GridLayout
                            className="layout"
                            layout={Alumni_layout}
                            cols={3}
                            rowHeight={490}
                            width={1335}
                            containerPadding={[20, -10]}
                            margin={[20, 5]}
                        >
                            <div key="a">
                                <div className="profile">
                                    <a href="https://en.wikipedia.org/wiki/Bill_Gates" target="_blank" rel="noopener noreferrer">
                                        <img src={require("../../img/tymur.jpg")} />
                                    </a>
                                    <figcaption className="name oxanium bold">
                                        Tymur Arsentiev
                                        <div className="icons">
                                            <a href="mailto:tymur.arsentiev.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/tymurarsent/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="b">
                                <div className="profile">
                                    <img src={require("../../img/rahil.jpg")} />
                                    <figcaption className="name oxanium bold">
                                        Rahil Sheth
                                        <div className="icons">
                                            <a href="https://github.com/rahilsheth" target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={".55em"} />
                                            </a>
                                            <a href="mailto:rahilsheth3@gmail.com" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/rahil-sheth-272583248/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="c">
                                <div className="profile">
                                    <img src={require("../../img/kevin.jpg")} />
                                    <figcaption className="name oxanium bold">
                                        Kevin Ye
                                        <div className="icons">
                                            <a href="mailto:kevin.ye@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/kye6/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="d">
                                <div className="profile">
                                    <img src={require("../../img/rudra.jpg")} />
                                    <figcaption className="name oxanium bold">
                                        Rudra Kukian
                                        <div className="icons">
                                            <a href="mailto:rudra.kukian@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/rudra-kukian-299904278/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="e">
                                <div className="profile">
                                    <img src={require("../../img/tanishtemp.jpg")} />
                                    <figcaption className="name oxanium bold">
                                        Tanish Sharma
                                        <div className="icons">
                                            <a href="mailto:tanish.sharma@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/tanish-sharma-43845523a/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="f">
                                <div className="profile">
                                    <img src={require("../../img/dmitriy.PNG")} />
                                    <figcaption className="name oxanium bold">
                                        Dmitriy Shor
                                        <div className="icons">
                                            <a href="https://github.com/DmitriyShor23" target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={".55em"} />
                                            </a>
                                            <a href="mailto:dmitriy.shor@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/dmitriy-shor-3539b1262/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="g">
                                <div className="profile">
                                    <img src={require("../../img/jae.PNG")} />
                                    <figcaption className="name oxanium bold">
                                        Jae Park
                                        <div className="icons">
                                            <a href="https://github.com/jaepark23" target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={".55em"} />
                                            </a>
                                            <a href="mailto:jae.park@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/jae-park-9a1209266/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="h">
                                <div className="profile">
                                    <img src={require("../../img/Kartik2.png")} />
                                    <figcaption className="name oxanium bold">
                                        Kartik Vasudeva
                                        <div className="icons">
                                            <a href="https://github.com/kartikvasudeva" target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={".55em"} />
                                            </a>
                                            <a href="mailto:kartik.vasudeva@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/kartik-vasudeva-72591a288/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="i">
                                <div className="profile">
                                    <img src={require("../../img/Sam Image.png")} />
                                    <figcaption className="name oxanium bold">
                                        Sam Shlau
                                        <div className="icons">
                                            <a href="mailto:sam.shlau@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/samuel-shlau2005/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="j">
                                <div className="profile">
                                    <img src={require("../../img/Sashank2.png")} />
                                    <figcaption className="name oxanium bold">
                                        Sashank Kurra
                                        <div className="icons">
                                            <a href="mailto:Sashank.Kurra@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/sashank-kurra-243bb7260/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="k">
                                <div className="profile">
                                    <img src={require("../../img/SinghAaryan.jpg")} />
                                    <figcaption className="name oxanium bold">
                                    
                                        Aaryan Singh
                                    
                                        <div className="icons">
                                            <a href="mailto:aaryan.singh@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".55em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/aaryans4699/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".55em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                        </GridLayout>
                        <motion.div
                            tabIndex={0}
                            onClick={() => window.open("mailto:adam.lueken@d128.org")}
                            className="click-to col-cc oxanium h6 bold w-100 text-centered"
                            whileHover={{ boxShadow: "0 0 1rem white" }}
                        >
                            Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Team;
