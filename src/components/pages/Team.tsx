import React, { useEffect } from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";
import Background from "../../img/team.webp";
import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function Team(props: {}) {
    const theme = useTheme();
    const navigate = useNavigate();

    // const layout = [
    //     { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
    //     { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
    //     { i: "c", x: 2, y: 0, w: 1, h: 1, static: true },
    //     { i: "d", x: 3, y: 0, w: 1, h: 1, static: true },
    //     { i: "e", x: 0, y: 1, w: 1, h: 1, static: true },
    //     { i: "f", x: 1, y: 1, w: 1, h: 1, static: true },
    //     { i: "g", x: 2, y: 1, w: 1, h: 1, static: true },
    //     { i: "h", x: 3, y: 1, w: 1, h: 1, static: true },
    //     { i: "i", x: 0, y: 2, w: 1, h: 1, static: true },
    //     { i: "j", x: 1, y: 2, w: 1, h: 1, static: true },
    //     { i: "k", x: 2, y: 2, w: 1, h: 1, static: true },
    //     { i: "l", x: 3, y: 2, w: 1, h: 1, static: true },
    //     { i: "m", x: 0, y: 3, w: 1, h: 1, static: true },
    //     { i: "n", x: 1, y: 3, w: 1, h: 1, static: true },
    //     { i: "o", x: 2, y: 3, w: 1, h: 1, static: true },
    //     { i: "p", x: 3, y: 3, w: 1, h: 1, static: true },
    //     { i: "q", x: 0, y: 4, w: 1, h: 1, static: true },
    //     { i: "r", x: 1, y: 4, w: 1, h: 1, static: true },
    // ];

    // const Alumni_layout = [
    //     { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
    //     { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
    //     { i: "c", x: 2, y: 0, w: 1, h: 1, static: true },
    //     { i: "d", x: 3, y: 0, w: 1, h: 1, static: true },
    //     { i: "e", x: 0, y: 1, w: 1, h: 1, static: true },
    //     { i: "f", x: 1, y: 1, w: 1, h: 1, static: true },
    //     { i: "g", x: 2, y: 1, w: 1, h: 1, static: true },
    //     { i: "h", x: 3, y: 1, w: 1, h: 1, static: true },
    //     { i: "i", x: 0, y: 2, w: 1, h: 1, static: true },
    //     { i: "j", x: 1, y: 2, w: 1, h: 1, static: true },
    //     { i: "k", x: 2, y: 2, w: 1, h: 1, static: true },
    //     { i: "l", x: 3, y: 2, w: 1, h: 1, static: true },
    // ];

    const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
    const cols = { lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 };
    const layouts = {
        lg: [
            { i: "a", x: 0, y: 0, w: 1, h: 1 },
            { i: "b", x: 1, y: 0, w: 1, h: 1 },
            { i: "c", x: 2, y: 0, w: 1, h: 1 },
            { i: "d", x: 3, y: 0, w: 1, h: 1 },
            { i: "e", x: 0, y: 1, w: 1, h: 1 },
            { i: "f", x: 1, y: 1, w: 1, h: 1 },
            { i: "g", x: 2, y: 1, w: 1, h: 1 },
            { i: "h", x: 3, y: 1, w: 1, h: 1 },
            { i: "i", x: 0, y: 2, w: 1, h: 1 },
            { i: "j", x: 1, y: 2, w: 1, h: 1 },
            { i: "k", x: 2, y: 2, w: 1, h: 1 },
            { i: "l", x: 3, y: 2, w: 1, h: 1 },
            { i: "m", x: 0, y: 3, w: 1, h: 1 },
            { i: "n", x: 1, y: 3, w: 1, h: 1 },
            { i: "o", x: 2, y: 3, w: 1, h: 1 },
            { i: "p", x: 3, y: 3, w: 1, h: 1 },
            { i: "q", x: 0, y: 4, w: 1, h: 1 },
            { i: "r", x: 1, y: 4, w: 1, h: 1 }
        ],
        md: [
            { i: "a", x: 0, y: 0, w: 1, h: 1 },
            { i: "b", x: 1, y: 0, w: 1, h: 1 },
            { i: "c", x: 2, y: 0, w: 1, h: 1 },
            { i: "d", x: 0, y: 1, w: 1, h: 1 },
            { i: "e", x: 1, y: 1, w: 1, h: 1 },
            { i: "f", x: 2, y: 1, w: 1, h: 1 },
            { i: "g", x: 0, y: 2, w: 1, h: 1 },
            { i: "h", x: 1, y: 2, w: 1, h: 1 },
            { i: "i", x: 2, y: 2, w: 1, h: 1 },
            { i: "j", x: 0, y: 3, w: 1, h: 1 },
            { i: "k", x: 1, y: 3, w: 1, h: 1 },
            { i: "l", x: 2, y: 3, w: 1, h: 1 },
            { i: "m", x: 0, y: 4, w: 1, h: 1 },
            { i: "n", x: 1, y: 4, w: 1, h: 1 },
            { i: "o", x: 2, y: 4, w: 1, h: 1 },
            { i: "p", x: 0, y: 5, w: 1, h: 1 },
            { i: "q", x: 1, y: 5, w: 1, h: 1 },
            { i: "r", x: 2, y: 5, w: 1, h: 1 }
        ],
        sm: [
            { i: "a", x: 0, y: 0, w: 1, h: 1 },
            { i: "b", x: 1, y: 0, w: 1, h: 1 },
            { i: "c", x: 0, y: 1, w: 1, h: 1 },
            { i: "d", x: 1, y: 1, w: 1, h: 1 },
            { i: "e", x: 0, y: 2, w: 1, h: 1 },
            { i: "f", x: 1, y: 2, w: 1, h: 1 },
            { i: "g", x: 0, y: 3, w: 1, h: 1 },
            { i: "h", x: 1, y: 3, w: 1, h: 1 },
            { i: "i", x: 0, y: 4, w: 1, h: 1 },
            { i: "j", x: 1, y: 4, w: 1, h: 1 },
            { i: "k", x: 0, y: 5, w: 1, h: 1 },
            { i: "l", x: 1, y: 5, w: 1, h: 1 },
            { i: "m", x: 0, y: 6, w: 1, h: 1 },
            { i: "n", x: 1, y: 6, w: 1, h: 1 },
            { i: "o", x: 0, y: 7, w: 1, h: 1 },
            { i: "p", x: 1, y: 7, w: 1, h: 1 },
            { i: "q", x: 0, y: 8, w: 1, h: 1 },
            { i: "r", x: 1, y: 8, w: 1, h: 1 }
        ],
        xs: [
            { i: "a", x: 0, y: 0, w: 1, h: 1 },
            { i: "b", x: 0, y: 1, w: 1, h: 1 },
            { i: "c", x: 0, y: 2, w: 1, h: 1 },
            { i: "d", x: 0, y: 3, w: 1, h: 1 },
            { i: "e", x: 0, y: 4, w: 1, h: 1 },
            { i: "f", x: 0, y: 5, w: 1, h: 1 },
            { i: "g", x: 0, y: 6, w: 1, h: 1 },
            { i: "h", x: 0, y: 7, w: 1, h: 1 },
            { i: "i", x: 0, y: 8, w: 1, h: 1 },
            { i: "j", x: 0, y: 9, w: 1, h: 1 },
            { i: "k", x: 0, y: 10, w: 1, h: 1 },
            { i: "l", x: 0, y: 11, w: 1, h: 1 },
            { i: "m", x: 0, y: 12, w: 1, h: 1 },
            { i: "n", x: 0, y: 13, w: 1, h: 1 },
            { i: "o", x: 0, y: 14, w: 1, h: 1 },
            { i: "p", x: 0, y: 15, w: 1, h: 1 },
            { i: "q", x: 0, y: 16, w: 1, h: 1 },
            { i: "r", x: 0, y: 17, w: 1, h: 1 }
        ]
    };

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
                        draggable={false}
                        
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

                        <div className= "alumni-title" style={{ marginLeft: 10 }}>
                            <h2 className= "h2 oxanium bold"> Board Members</h2>
                        </div>
                        <ResponsiveGridLayout
                            className="layout"
                            layouts={layouts}
                            breakpoints={breakpoints}
                            cols={cols}
                            rowHeight={350}
                            containerPadding={[40, -10]}
                            margin={[50, 5]}
                            style={{ marginLeft: -35 }}
                            isDraggable= {false}
                            isResizable= {false}
                        >
                            <div key="a">
                                <div className="profile">
                                    <img src={require("../../img/lueken.jpg")} />
                                    <figcaption className="name oxanium bold">
                                        Adam Lueken 
                                        <div className="icons">
                                            <a href="mailto:adam.lueken@d128.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/adam-lueken-37455a8/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="b">
                                <div className="profile">
                                    <img src={require("../../img/Siddharth.png")} />
                                    <figcaption className="name oxanium bold">
                                        Siddharth Avula
                                        <div className="icons">
                                            <a href="mailto:siddharth.avula@d128.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="www.linkedin.com/in/siddharth-avula-8b904a291" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="c">
                                <div className="profile">
                                    <img src={require("../../img/Kartik2.png")} />
                                    <figcaption className="name oxanium bold">
                                        Kartik Vasudeva
                                        <div className="icons">
                                            <a href="mailto:kartik.vasudeva@d128.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="d">
                                <div className="profile">
                                    <img src={require("../../img/Abraham.png")} />
                                    <figcaption className="name oxanium bold">
                                        Shayna Weinstein
                                        <div className="icons">
                                            <a href="mailto:shayshayro1@gmail.com" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/shayna-weinstein/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>


                        </ResponsiveGridLayout>
                        <div className="alumni-title" style={{ marginLeft: 10 }}>
                            <h2 className="h2 oxanium bold">Current Members</h2>
                        </div>
                        <ResponsiveGridLayout
                            className="layout"
                            layouts={layouts}
                            breakpoints={breakpoints}
                            cols={cols}
                            rowHeight={450}
                            containerPadding={[40, -10]}
                            margin={[50, 5]}
                            style={{ marginLeft: -35 }}
                            isDraggable= {false}
                            isResizable= {false}
                        >
                            <div key="a">
                                <div className="profile">
                                    <img src={require("../../img/Connor .png")} />
                                    <figcaption className="name oxanium bold">
                                        Connor Albrecht
                                        <div className="icons">
                                            <a href="mailto:connor.albrecht@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/connor-albrecht-aa583a30b" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/rohit-dashaputra-9646312a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/omkotwal/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="e">
                                <div className="profile">
                                    <img src={require("../../img/Zoe.jpeg")} />
                                    <figcaption className="name oxanium bold">
                                    Zoe Mehta
                                        <div className="icons">
                                            <a href="mailto:Arnav.gupta@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/zoe-mehta-0a9040289/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="f">
                                <div className="profile">
                                    <img src={require("../../img/Sai.png")} />
                                    <figcaption className="name oxanium bold">
                                         Sai Soleti
                                        <div className="icons">
                                            <a href="mailto:sai.soleti@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/sai-soleti-942525293/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="g">
                                <div className="profile">
                                    <img src={require("../../img/abe2.jpg")} />
                                    <figcaption className="name oxanium bold">
                                        Abraham Guo
                                        <div className="icons">
                                            <a href="mailto:abraham.guo@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/abraham-guo-9a6551309/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            
                            <div key="h">
                                <div className="profile">
                                    <img src={require("../../img/Abraham.png")} />
                                    <figcaption className="name oxanium bold">
                                     Mohith Sendil Kumar
                                        <div className="icons">
                                            
                                            <a href="mailto:mohit.kumar@vhhscougars.org"target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/mohith-s-98894a309/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            
                            <div key="i">
                                <div className="profile">
                                    <img src={require("../../img/Abraham.png")} />
                                    <figcaption className="name oxanium bold">
                                        Aishi Agarwal
                                        <div className="icons">
                                            <a href="mailto:aishi.agarwal@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/abraham-guo-9a6551309/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="j">
                                <div className="profile">
                                    <img src={require("../../img/Pritika.jpeg")} />
                                    <figcaption className="name oxanium bold">
                                    Pritika Barman
                                        <div className="icons">
                                            <a href="mailto:pritika.barman@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/pritika-barman-7890b2110/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="k">
                                <div className="profile">
                                    <img src={require("../../img/Stephen.jpeg")} />
                                    <figcaption className="name oxanium bold">
                                    Stephen Posner
                                        <div className="icons">
                                            <a href="mailto:stephen.posner@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/stephen-posner-679b2030a" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="l">
                                <div className="profile">
                                    <img src={require("../../img/Abraham.png")} />
                                    <figcaption className="name oxanium bold">
                                    Arnav Gupta
                                        <div className="icons">
                                            <a href="mailto:Arnav.gupta@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/arnavguptavh/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="m">
                                <div className="profile">
                                    <img src={require("../../img/Riley.png")} />
                                    <figcaption className="name oxanium bold">
                                    Riley Mitchell
                                        <div className="icons">
                                            <a href="mailto:riley.mitchell@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/iamrileymitchell/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="n">
                                <div className="profile">
                                    <img src={require("../../img/Abraham.png")} />
                                    <figcaption className="name oxanium bold">
                                    Sashank Muppaneni
                                        <div className="icons">
                                            <a href="mailto:sashank.muppaneni@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={"0.7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/sashank-muppaneni-5926b422b" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            


                        </ResponsiveGridLayout>

                        <div className="alumni-title" style={{ marginLeft: 10 }}>
                            <h2 className="h2 oxanium bold">Alumni Members</h2>
                        </div>
                        <ResponsiveGridLayout
                            className="layout"
                            layouts={layouts}
                            breakpoints={breakpoints}
                            cols={cols}
                            rowHeight={450}
                            containerPadding={[40, -10]}
                            margin={[50, 5]}
                            style={{ marginLeft: -35 }}
                            isDraggable= {false}
                            isResizable= {false}
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/tymurarsent/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaGithub size={".7em"} />
                                            </a>
                                            <a href="mailto:rahilsheth3@gmail.com" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/rahil-sheth-272583248/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/kye6/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/rudra-kukian-299904278/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/tanish-sharma-43845523a/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaGithub size={".7em"} />
                                            </a>
                                            <a href="mailto:dmitriy.shor@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/dmitriy-shor-3539b1262/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaGithub size={".7em"} />
                                            </a>
                                            <a href="mailto:jae.park@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/jae-park-9a1209266/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            <div key="h">
                                <div className="profile">
                                    <img src={require("../../img/Bisti.jpeg")} />
                                    <figcaption className="name oxanium bold">
                                        Bisti Potdar       
                                        <div className="icons">
                                            <a href="mailto:bisti.potdar@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/bisti-potdar-0a0aa8244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/samuel-shlau2005/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/sashank-kurra-243bb7260/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
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
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/aaryans4699/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="l">
                                <div className="profile">
                                    <img src={require("../../img/Pilnnnn.png")} />
                                    <figcaption className="name oxanium bold">
                                    
                                        Palaniyappan Kannan
                                    
                                        <div className="icons">
                                            <a href="mailto:aaryan.singh@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/aaryans4699/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="m">
                                <div className="profile">
                                    <img src={require("../../img/Linjian.png")} />
                                    <figcaption className="name oxanium bold">
                                    
                                        Linjian Ni
                                    
                                        <div className="icons">
                                            <a href="mailto:aaryan.singh@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/aaryans4699/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>

                            <div key="n">
                                <div className="profile">
                                    <img src={require("../../img/Aahsini.png")} />
                                    <figcaption className="name oxanium bold">
                                    
                                        Aashini Kochar
                                    
                                        <div className="icons">
                                            <a href="mailto:aaryan.singh@vhhscougars.org" target="_blank" rel="noopener noreferrer">
                                                <FaEnvelope size={".7em"} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/aaryans4699/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn size={".7em"} />
                                            </a>
                                        </div>
                                    </figcaption>
                                    <figcaption className="caption oxanium"></figcaption>
                                </div>
                            </div>
                            
                            
                            {/* Repeat the same structure for other alumni profiles */}
                        </ResponsiveGridLayout>
                       

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
