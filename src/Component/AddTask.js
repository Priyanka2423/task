import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from "@mui/material";
import { RiSearchLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import InputAdornment from '@mui/material/InputAdornment';
import { useStyles } from "../assets/css/addTaskStyle";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const AddTask = () => {
    const [data, setData] = useState();
    const [datas, setDatas] = useState([]);
    const [myData, setMyData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSearch = (e) => {
        setSearch(e.target.value)
        if (search !== '') {
            const filteredData = datas.filter((item) => {
                return item.toLowerCase().includes(search.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(datas)
        }
    }

    const handleChange = (e) => {
        let val = e.target.value;
        setData(val)
    }

    const addTask = () => {
        datas.push(data);
        setOpen(false)
    }

    const handleDelete = (indx) => {
        let del = datas.filter((elem, i) => {
            return i !== indx
        })
        setDatas(del)
    }

    return (
        <Box sx={{ p: 5 }}>
            <Grid container spacing={{ xs: 6, md: 6 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                <Grid item xs={6} sm={6} md={6}>
                    <Box className={classes.box_first}>
                        <TextField className={classes.box_firstTxt}
                            onChange={(e) => handleSearch(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start" sx={{ fontSize: '24px' }}>
                                        <RiSearchLine />
                                    </InputAdornment>
                                ),
                                className: classes.input
                            }}
                            placeholder="Search">
                        </TextField>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Box className={classes.box_two} >
                        <Button className={classes.addBtn} variant="text"
                            startIcon={< AiOutlinePlus />}
                            onClick={() => handleOpen()}
                        >
                            Add Task</Button>
                    </Box>
                </Grid>

            </Grid>
            {
                data && data.length > 0 ?
                    <Box className={classes.dataBox}>
                        {
                            search && search.length > 1 ?
                                filteredResults && filteredResults.map((elem, i) => {
                                    return (

                                        <Box sx={{ p: 1 }} key={i}>
                                            <CloseIcon className={classes.closeIcn}
                                                onClick={() => handleDelete(i)} />
                                            <Typography className={classes.dataTxt}>
                                                {elem}
                                            </Typography>
                                        </Box>
                                    )
                                })
                                :
                                datas && datas.map((elem, i) => {
                                    return (

                                        <Box sx={{ p: 1 }} key={i}>
                                            <CloseIcon className={classes.closeIcn}
                                                onClick={() => handleDelete(i)} />
                                            <Typography className={classes.dataTxt}>
                                                {elem}
                                            </Typography>
                                        </Box>
                                    )
                                })
                        }
                    </Box>
                    :
                    ""
            }

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Box sx={{ paddingBottom: '20px' }}>
                        <CloseIcon
                            onClick={() => handleClose()}
                            className={classes.closeIcn} />
                        <Typography sx={{ fontSize: "20px" }}>
                            Add Task
                        </Typography>

                    </Box>
                    <TextField className={classes.addTxt} fullWidth
                        placeholder="Add Title"
                        onChange={(e) => handleChange(e)}
                    >
                    </TextField>
                    <Box sx={{ paddingTop: '10px' }}>
                        <Button className={classes.addTask}
                            variant="text" onClick={() => addTask()}
                        >Add Task
                        </Button>
                    </Box>
                </Box>
            </Modal >
        </Box >
    )
}

export default AddTask;