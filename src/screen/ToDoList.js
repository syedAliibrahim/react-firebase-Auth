import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, createTheme, FormControl, Grid, IconButton, InputLabel, OutlinedInput, ThemeProvider, Typography } from '@mui/material'
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/loader';
import { dataBase, } from '../config/firebasemethods';



function ToDoList() {

    //Loader
    const [isLoader, setIsLoader] = useState(true)

    const [data, setData] = useState([])

    // ToDo Functionality---------------
    let [text, setText] = useState("");
    let [list, setList] = useState([]);

    // add button functionality
    let add = () => {
        list.push(text)
        setList([...list])
        // console.log(list)
        setText('')
    }

    // Delete All button functionality
    let deleteAll = () => {
        setList([])
    }

    // Delete item button functionality
    let deleteItem = (id) => {
        let listI = list.filter((value, index) => {
            return index !== id
        })
        setList(listI)
    }

    let editBtn = (id) => {
        let newValue = prompt("New Value")
        list[id] = newValue
        setList([...list])
    }
    // ToDo Functionality-----------------

    const colorTheme = createTheme({
        palette: {
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });


    const handleGetDatabase = () => {
        let reference = ref(dataBase, `user/`);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            const userData = data[location.state.user];
            setData(userData)
            setIsLoader(false)
            // console.log(userData.name.charAt(0).toUpperCase())
        })
    };


    const location = useLocation()
    const navigate = useNavigate()

    const logOut = () => {
        navigate('/login')
    }

    useEffect(() => {
        handleGetDatabase()
    }, [])


    return (
        <>

            {isLoader ? <Loader /> :
                <Box sx={{ backgroundColor: "#3c6e71", minHeight: '100vh' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            p: 1
                        }}
                    >
                        <Button variant="contained" color='info'
                            sx={{
                                mx: 1,
                                backgroundColor: '#000',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#000'
                                }
                            }}
                            onClick={logOut}
                        >Log Out</Button>
                    </Box>
                    <Box className='text-white text-center mb-4'>
                        <Typography variant='p' className='display-4'>Welcome {data.name.toUpperCase()}</Typography>
                    </Box>
                    <Grid container justifyContent='center'>
                        <Grid item md={4} xs={10}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                                p: 4,
                                borderRadius: '10px',
                                backgroundColor: '#fff'
                            }}>
                                <Typography variant='p' className='display-5 text-center'>Todo App</Typography>
                                <ThemeProvider theme={colorTheme}>
                                    <FormControl sx={{ m: 1 }} variant='outlined' color='neutral'>
                                        <InputLabel htmlFor='outlined-userInput'>Enter items</InputLabel>
                                        <OutlinedInput
                                            id='outlined-userInput'
                                            type='text'
                                            // onChange={handleChange('password')}
                                            label='Enter items'
                                            onChange={(e) => setText(e.target.value)}
                                            value={text}
                                            fullWidth
                                            required
                                        ></OutlinedInput>
                                    </FormControl>
                                </ThemeProvider>
                                <Box>
                                    <Button variant="contained" color='info'
                                        sx={{
                                            mx: 1,
                                            backgroundColor: '#191919',
                                            '&:hover': {
                                                backgroundColor: '#fff',
                                                color: '#191919'
                                            }
                                        }}
                                        onClick={add}
                                    >Add</Button>
                                    <Button variant="contained" color='info'
                                        sx={{
                                            mx: 1,
                                            backgroundColor: '#d90429',
                                            '&:hover': {
                                                backgroundColor: '#fff',
                                                color: '#d90429'
                                            }
                                        }}
                                        onClick={deleteAll}
                                    >Delete All</Button>
                                </Box>
                                <Box sx={{ m: 1 }}>
                                    <ul className='list-group' style={{ width: '100%', bgcolor: 'background.paper' }}>
                                        {list.map((e, i) => {
                                            return <li key={i} className='list-group-item p-3' style={{ display: 'flex', justifyContent: 'space-between', borderColor: '#ccc' }}>
                                                {e}
                                                <Box>
                                                    <IconButton onClick={() => editBtn(i)}>
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton onClick={() => deleteItem(i)}>
                                                        <Delete />
                                                    </IconButton>
                                                </Box>
                                            </li>
                                        })}
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            }
        </>
    )
}

export default ToDoList