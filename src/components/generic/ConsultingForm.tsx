import React, { useEffect, useState, useRef } from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { Divider, Stack } from "@mui/material";

import emailjs from '@emailjs/browser'

const TextEntryField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInputBase-input': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});


function ConsultingForm() {
    const form = useRef();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [checked, setChecked] = useState(false)

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Prevent the default form submission
    
        // Extract the form data

        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);
    
        // Prepare the template parameters
        const templateParams = {
            name: formData.get('name') || '', // Fallback to empty string if null
            email: formData.get('email') || '',
            company: formData.get('companyname') || '',
            message: formData.get('other') || ''
            // sponsor: (form.querySelector('input[name="sponsor"]') as HTMLInputElement).checked ? 'Yes' : 'No',
            // intern: (form.querySelector('input[name="interns"]') as HTMLInputElement).checked ? 'Yes' : 'No',
            // IT: (form.querySelector('input[name="IT"]') as HTMLInputElement).checked ? 'Yes' : 'No',
            
        };
    
        emailjs
            .send("service_sbcmhmr", "template_3aj0ied", templateParams, "76imFaTEAYXwAt6pw")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

            emailjs
            .send("service_3qcfjxw", "template_7ad3rjg", templateParams, "35zn_rtgX1-qsLE90")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    
        e.currentTarget.reset(); // Reset the form after submission
    }


    return <motion.div className="l"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: .6 }}
    >
        <form className="consulting-form" onSubmit = {sendEmail}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
            >

                <TextEntryField
                    style={{ width: "200px" }}
                    size="small"
                    type="text"
                    label="Name"
                    name = "name"
                    variant="outlined"
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: 'white' },
                    }}
                />

                <TextEntryField
                    style={{ width: "200px" }}
                    size="small"
                    type="text"
                    name = "email"
                    label="Email"
                    variant="outlined"
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: 'white' },
                    }}
                />

                <TextEntryField
                    style={{ width: "200px" }}
                    size="small"
                    type="text"
                    label="Company Name"
                    name = "companyname"
                    variant="outlined"
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: 'white' },
                    }}
                />
            </Stack>

            <br />
            <Divider variant="middle" style={{ background: 'white', borderBottomWidth: 1, marginLeft: '4%', marginRight: '4%' }} />


            {/* <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}

            >
                <FormControlLabel control={<Checkbox style={{
                    color: "#FFFFFF",
                }} />} label="Sponsor Lcoal Events?" name = "sponsor"/>
                <FormControlLabel control={<Checkbox style={{
                    color: "#FFFFFF",
                }} />} label="Need interns?" name = "interns"/>
                <FormControlLabel control={<Checkbox style={{
                    color: "#FFFFFF",
                }} />} label="Need a project completed?" />
            </Stack> */}
            <br/>
            
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                
            >
                {/* <FormControlLabel control={<Checkbox style={{
                    color: "#FFFFFF",
                }} />} label="Need IT support?" name = "IT"/>
                <FormControlLabel control={<Checkbox style={{
                    color: "#FFFFFF"
                }} checked={checked} onChange={handleChange} />} label="" /> */}
                <TextEntryField
                    style={{ width: "500px", }}
                    size="medium"
                    type="text"
                    variant="outlined"
                    // disabled={!checked}
                    label= "Message "
                    InputLabelProps={{
                        style: { color: '#fff', borderColor: 'white' },
                    }}
                    name = "other"
                    multiline
                    rows={2}
                    
                />
            </Stack>
            <br />
            <Box textAlign='center'>
                <Button variant='contained' type = "submit">
                    Submit
                </Button>
            </Box>
        </form>
    </motion.div >


}

export default ConsultingForm;