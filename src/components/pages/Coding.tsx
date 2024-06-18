import React, { useEffect } from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


function Coding() {
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        theme.setLoadState(-2);
    }, [theme]);

    const advance = (url: string) => {
        theme.setLoadState(-2);
        setTimeout(() => {
          navigate(url);
          theme.setFullscreen(false);
        }, 500);
      };

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
                                backgroundImage:
                                    'url("https://campussuite-storage.s3.amazonaws.com/prod/1059662/301794b6-30da-11e7-9e05-124f7febbf4a/1811609/d77e7936-9ff2-11e8-8fd6-120544974b42/optimizations/1")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            Education
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
                        <div className="list row-bc w-100" style={{ padding: "20px" }}>
                            <ul className="oxanium h3" style={{ flex: 1 }}>
                                <li>Weekdays from 1PM - 3PM at Libertyville High School</li>
                                <li>Coding Language Specialties: Python, JavaScript, and Java classes.</li>
                                <li>Previously, we have done 3D printing, Micro Bits, and Battle Bots.</li>
                                <li>We have had 75 students.</li>
                            </ul>
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                            <Button
                                variant="contained"
                                onClick={() => advance("/form?toggle=education")}

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
                        >
                            Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Coding;