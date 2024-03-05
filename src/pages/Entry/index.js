import React from 'react';
import {
    Box,
    Button,
    Stack,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import FullList from './FullList';
import BulkUpdate from './BulkUpdate';
import RemoveBot from './RemoveBot';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

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

export default function Entry () {
    
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Stack flexDirection="row" justifyContent="flex-end" gap={1.5}>
                <Button 
                    startIcon={<SettingsOutlinedIcon fontSize="small" />} 
                    onClick={() => navigate('/setting')}
                    sx={{ color: '#000' }}>
                    Settings
                </Button>
                <Button
                    variant="contained"
                >Export</Button>
            </Stack>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, pt: 4, borderColor: 'divider' }}>
                    <Stack 
                        flexDirection={matchUpSm ? "row" : 'column'} 
                        justifyContent="space-between"
                        alignItems={matchUpSm ? "center" : "flex-start"}
                        gap={2}
                        sx={{
                            pb: matchUpSm ? 0 : 1
                        }}
                    >
                        <Tabs 
                            value={value} 
                            onChange={handleChange} 
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                '& .MuiTabs-indicator': {
                                    bgcolor: '#BB86FC'
                                },
                                '& .Mui-selected': {
                                    color: '#BB86FC !important'
                                },
                                '& .MuiButtonBase-root': {
                                    minWidth: 'unset'
                                }
                            }}
                        >
                            <Tab 
                                label={
                                    <Stack
                                        flexDirection="row"
                                        alignItems="center"
                                        gap={1}
                                        sx={{ color: '#000' }}
                                    >
                                        <FormatListBulletedOutlinedIcon />
                                        <Typography sx={{ display: matchUpSm ? 'block' : 'none' }}>Full List</Typography>
                                    </Stack>
                                } 
                                {...a11yProps(0)} 
                            />
                            <Tab 
                                label={
                                    <Stack
                                        flexDirection="row"
                                        alignItems="center"
                                        sx={{ color: '#000' }}
                                        gap={1}
                                    >
                                        <SystemUpdateAltOutlinedIcon />
                                        <Typography sx={{ display: matchUpSm ? 'block' : 'none' }}>Bulk Update</Typography>
                                    </Stack>
                                }
                                {...a11yProps(1)} />
                            <Tab 
                                label={
                                    <Stack
                                        flexDirection="row"
                                        alignItems="center"
                                        sx={{ color: '#000' }}
                                        gap={1}
                                    >
                                        <DoDisturbOnOutlinedIcon />
                                        <Typography sx={{ display: matchUpSm ? 'block' : 'none' }}>Remove Bots</Typography>
                                    </Stack>
                                } 
                                {...a11yProps(2)} />
                        </Tabs>
                        <Stack flexDirection="row" alignItems="center" justifyContent={matchUpSm ? "flex-start" : "flex-end"} sx={{ width: matchUpSm ? 'inherit' : '100%' }} gap={1}>
                            <EmojiEventsOutlinedIcon />
                            <Typography sx={{ fontFamily: 'Inter-Semi-Bold' }}>Pick Winners</Typography>
                        </Stack>
                    </Stack>
                </Box>
                <TabPanel value={value} index={0}>
                    <FullList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BulkUpdate />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <RemoveBot />
                </TabPanel>
            </Box>
        </Box>
    )
}