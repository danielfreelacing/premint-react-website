import { useState } from 'react';
import {
    Box, 
    Stack,
    Typography,
    Button,
    OutlinedInput,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import request from '../../../utils/request';
import { pinFile } from '../../../utils/update';

export default function Detail ({ setStep, setProject, project }) {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const [image, setImage] = useState([]);
    const [imagePreview, setImagePreview] = useState('');
    const [bannerImage, setBannerImage] = useState([]);
    const [bannerImagePreview, setBannerImagePreview] = useState('');
    const [name, setName] = useState('');
    const [official, setOfficial] = useState('');
    const [price, setPrice] =  useState(0);
    const [date, setDate] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeOfficial = (e) => {
        setOfficial(e.target.value);
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const handleImage = (e) => {
        const preview = URL.createObjectURL(e.target.files[0]);
        setImage(e.target.files);
        setImagePreview(preview);
    }

    const handleBannerImage = (e) => {
        const preview = URL.createObjectURL(e.target.files[0]);
        setBannerImage(e.target.files);
        setBannerImagePreview(preview);
    }

    const handle = async (e) => {
        e.preventDefault();
        const detail = {
            name: name,
            official: official,
            price: price,
            date: date,
            creator: '0x176B6eB693792Ad7081E25B537D8E14bea130Ff8'
        }
        if (image.length) {
            const imagePath = await pinFile(image[0]);
            detail.image = imagePath;
        }

        if (bannerImage.length) {
            const bannerPath = await pinFile(bannerImage[0]);
            detail.banner = bannerPath;
        }
        // const response = await request('/project/create', {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(detail)
        // })
        // setProject(response.success.project);
        setStep(2);
    }

    return (
        <Stack gap={3} component="form" onSubmit={handle}>
            <Typography variant="h5">Tell us about the project</Typography>
            <Stack 
                gap={5}
                sx={{
                    bgcolor: theme.palette.background.paper,
                    border: '1px solid #F1F4F9',
                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                    borderRadius: 1,
                    p: 4
                }}
            >
                <Stack gap={1.5}>
                    <Typography>Name of Project / Collection</Typography>
                    <OutlinedInput 
                        size="small"
                        sx={{
                            bgcolor: '#fff'
                        }}
                        required
                        onChange={onChangeName}
                        placeholder="Name of Project / Collection"
                    />
                </Stack>
                <Stack gap={1.5}>
                    <Typography>Official Project Website</Typography>
                    <OutlinedInput 
                        size="small"
                        sx={{
                            bgcolor: '#fff'
                        }}
                        required
                        onChange={onChangeOfficial}
                        placeholder="Official Project Website"
                    />
                    <Typography variant="body2">
                        This is required. and should Not be a Twitter or Discord web address
                        If you don't yet have an official link for your project, it might be too early to launch a PREMINT
                    </Typography>
                </Stack>
                <Stack gap={1.5}>
                    <Typography>Image</Typography>
                    <Typography variant="body2">
                        A square image similar to what you'd upload as your Twitter photo
                    </Typography>
                    <Stack 
                        flexDirection={matchUpMd ? "row" : "column"}
                        alignItems="flex-start" 
                        gap={3} 
                        sx={{ pt: 2 }}
                    >
                        <Stack 
                            alignItems="center" 
                            justifyContent="center"
                            sx={{ 
                                width: '100%',
                                height: '100%',
                                maxWidth: 260, 
                                maxHeight: 220,
                                borderRadius: 2,
                                p: 2,
                                border: `1px solid ${theme.palette.divider}`
                            }}>
                            <Box 
                                component="img" 
                                src={imagePreview ? imagePreview : "/images/preview.png"} 
                                sx={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" gap={2}>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    borderColor: theme.palette.divider,
                                    color: theme.palette.text.primary
                                }}
                            >
                            Upload File
                            <input
                                type="file"
                                hidden
                                name="file"
                                required
                                onChange={handleImage}
                            />
                            </Button>
                            <Typography 
                                sx={{ 
                                    color: theme.palette.text.secondary 
                                }}
                            >{image[0]? image[0].name : "No file chosen"}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack gap={1.5}>
                    <Typography>Banner Image</Typography>
                    
                    <Typography variant="body2">
                        A square image similar to what you'd upload as your Twitter photo
                    </Typography>
                    
                    <Stack 
                        flexDirection={matchUpMd ? "row" : "column"}
                        alignItems="flex-start" 
                        gap={3} 
                        sx={{ pt: 2 }}
                    >
                        <Stack 
                            alignItems="center" 
                            justifyContent="center"
                            sx={{ 
                                width: '100%',
                                height: '100%',
                                maxWidth: 260, 
                                maxHeight: 220,
                                borderRadius: 2,
                                p: 2,
                                border: `1px solid ${theme.palette.divider}`
                            }}>
                            <Box 
                                component="img" 
                                src={bannerImagePreview ? bannerImagePreview : "/images/preview.png"} 
                                sx={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" gap={2}>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    borderColor: theme.palette.divider,
                                    color: theme.palette.text.primary
                                }}
                            >
                            Upload File
                            <input
                                type="file"
                                hidden
                                name="file"
                                onChange={handleBannerImage}
                            />
                            </Button>
                            <Typography 
                                sx={{ 
                                    color: theme.palette.text.secondary 
                                }}
                            >{bannerImage[0]? bannerImage[0].name : "No file chosen"}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack gap={1.5}>
                    <Typography>Mint price</Typography>
                    <OutlinedInput 
                        size="small"
                        placeholder="Mint price"
                        onChange={onChangePrice}
                    />
                </Stack>
                <Stack gap={1.5}>
                    <Typography>Mint date</Typography>
                    <OutlinedInput 
                        size="small"
                        placeholder="Mint date"
                        type="datetime-local"
                        onChange={onChangeDate}
                    />
                    <Typography variant="body2">
                        RECOMMENDED. This helps the person who is registering remember to mint
                    </Typography>
                </Stack>
            </Stack>
            <Stack flexDirection="row" justifyContent="flex-end">
                <Button variant="contained" 
                    type="submit"
                    sx={{
                        bgcolor: '#BB86FC',
                        textTransform: 'uppercase'
                    }}
                >Next</Button>
            </Stack>
        </Stack>
    )
}