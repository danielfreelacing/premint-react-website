import React from 'react';
import {
    Box, 
    Tabs, 
    Tab,
    Typography,
} from '@mui/material';
import ProjectInfo from './ProjectInfo';
import Requirements from './Requirements';
import SignupAccess from './SignupAccess';
import Transparrency from './Transparrency';
import Raffle from './Raffle';
import DiscordBot from './DiscordBot';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Setting () {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Box>
                <Typography>
                    Projects on LOREM are very customizable. 
                    You can set eligibility requirements, registration times, etc...
                </Typography>
            </Box>
            <Box sx={{ width: '100%', pt: 4 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: '100%' }}>
                    <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable prevent tabs example"
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                position: 'absolute'
                            },
                            '& .MuiTabs-indicator': {
                                bgcolor: '#BB86FC'
                            },
                            '& .Mui-selected': {
                                color: '#BB86FC !important'
                            }
                        }}
                    >
                        <Tab label={
                            <Typography sx={{ fontFamily: 'Inter-Bold'}}>Project info</Typography>
                        } {...a11yProps(0)} />
                        <Tab label={
                            <Typography sx={{ fontFamily: 'Inter-Bold'}}>Requirements</Typography>
                        } {...a11yProps(1)} />
                        <Tab label={
                            <Typography sx={{ fontFamily: 'Inter-Bold'}}>Signup access</Typography>
                        } {...a11yProps(2)} />
                        <Tab label={
                            <Typography sx={{ fontFamily: 'Inter-Bold'}}>Transparency</Typography>
                        } {...a11yProps(3)} />
                        <Tab label={
                            <Typography sx={{ fontFamily: 'Inter-Bold'}}>Raffle</Typography>
                        } {...a11yProps(4)} />
                        <Tab label={
                            <Typography sx={{ fontFamily: 'Inter-Bold'}}>Discord Bot</Typography>
                        } {...a11yProps(5)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ProjectInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Requirements />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SignupAccess />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Transparrency />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Raffle />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <DiscordBot />
                </TabPanel>
            </Box>
        </Box>
    );
}