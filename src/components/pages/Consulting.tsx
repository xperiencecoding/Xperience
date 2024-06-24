import "../../scss/core.scss";
import "../../scss/pages.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";

function Consulting() {
    const [showGoogleDoc, setShowGoogleDoc] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        theme.setLoadState(-2);
    }, [theme]);

    const shortParagraph = "XPerience offers solutions to help businesses like yours! Let our CS students at Vernon Hills High School help you with your next technological endeavor.";
    const shortBulletPoints = [
        "Customized safety solutions",
        "Fire safety apps for education",
        "Engaging organizational videos",
        "Real-time incident reporting apps",
        "Custom tech solutions"
    ];

    return (
        <div className="apex-coding w-100 h-100 col-cc">
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
                                backgroundImage: "url('https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/06/24144753/consulting-jobs-1024x512-b-1-1.jpeg')",
                                backgroundSize: "100% auto",
                                backgroundPosition: "50% 35%",
                            }}
                        >
                            Consulting
                            <motion.div
                                className="back"
                                tabIndex={0}
                                onClick={() => {
                                    theme.setLoadState(-1);
                                    setTimeout(() => {
                                        navigate("/");
                                    }, 500);
                                }}
                                whileHover={{ boxShadow: "0 0 1rem white" }}
                            >
                                {"<"}
                            </motion.div>
                        </div>
                        <div className="description-container">
                            <div className="oxanium h6 desktop-paragraph" style={{ textAlign: "center", lineHeight: "1.75", padding: "0 60px", fontSize: "1.4rem", marginBottom: "20px" }}>
                                XPerience offers these solutions to help businesses like yours! Our CS students at Vernon Hills High School are future leaders, with vast skillsets, powerful perspectives, and unique solutions. Let them help you with your next technological endeavor.
                            </div>
                            <div className="oxanium h6 mobile-paragraph" style={{ textAlign: "center", lineHeight: "1.75", padding: "0 20px", fontSize: "1.2rem", marginBottom: "10px" }}>
                                {shortParagraph}
                            </div>
                        </div>
                        <div className="row bullet-points-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", padding: "0 60px" }}>
                            <div className="bullet-points desktop-bullet-points oxanium h6" style={{ lineHeight: "1.75", fontSize: "1.4rem", flex: 1 }}>
                                <ul style={{ listStyleType: "disc", textAlign: "left", paddingLeft: "20px" }}>
                                    <li>Customized safety solutions for organizations</li>
                                    <li>Fire safety apps tailored for educational purposes</li>
                                    <li>Engaging videos showcasing organizational environments</li>
                                    <li>Workplace safety apps for real-time incident reporting</li>
                                    <li>Custom tech solutions: software applications, mobile apps, web platforms, interactive videos</li>
                                </ul>
                            </div>
                            <div className="bullet-points mobile-bullet-points oxanium h6" style={{ lineHeight: "1.75", fontSize: "1.2rem", flex: 1, paddingLeft: "20px" }}>
                                <ul style={{ listStyleType: "disc", textAlign: "left" }}>
                                    {shortBulletPoints.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="google-doc-container">
                                <div className="google-doc-embed desktop-google-doc">
                                    <iframe
                                        className="google-doc-iframe"
                                        src="https://docs.google.com/document/d/1wJh8QC1-SfL-h3IirxDdf04O9V78izsEMKEAxSdrOXw/preview"
                                        width="100%"
                                        height="500"
                                        style={{ border: "1px solid #ccc", borderRadius: "5px" }}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <Button
                                    className="google-doc-button"
                                    variant="contained"
                                    onClick={() => window.open("https://docs.google.com/document/d/1wJh8QC1-SfL-h3IirxDdf04O9V78izsEMKEAxSdrOXw/edit", "_blank")}
                                    sx={{
                                        backgroundColor: '#424242', // Dark gray background
                                        color: '#FFFFFF', // White text
                                        border: '2px solid #424242', // Matching dark gray border
                                        borderRadius: '5px',
                                        padding: '10px 20px',
                                        marginTop: '20px', // Added margin to separate the button from the iframe
                                        '&:hover': {
                                            backgroundColor: '#616161', // Slightly lighter gray on hover
                                            borderColor: '#616161', // Matching border color on hover
                                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
                                        },
                                    }}
                                >
                                    View Google Doc
                                </Button>
                            </div>
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                            <Button
                                variant="contained"
                                onClick={() => navigate("/form")}
                                sx={{
                                    backgroundColor: '#424242', // Dark gray background
                                    color: '#FFFFFF', // White text
                                    border: '2px solid #424242', // Matching dark gray border
                                    borderRadius: '5px',
                                    padding: '10px 20px',
                                    '&:hover': {
                                        backgroundColor: '#616161', // Slightly lighter gray on hover
                                        borderColor: '#616161', // Matching border color on hover
                                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
                                    },
                                }}
                            >
                                Sign up for notifications for upcoming camps!
                            </Button>
                        </div>
                        <motion.div
                            tabIndex={0}
                            onClick={() => window.open("mailto:adam.lueken@d128.org")}
                            className="click-to col-cc oxanium h6 bold w-100 text-centered"
                            whileHover={{ boxShadow: "0 0 1rem white" }}
                            style={{ padding: "20px" }}
                        >
                            Click to contact Adam Lueken (adam.lueken@d128.org) with more information.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Consulting;
