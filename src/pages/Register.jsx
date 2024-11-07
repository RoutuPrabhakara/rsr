import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { CheckCircleOutline, LocalTaxi } from '@mui/icons-material';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import Loading from '../components/loading/Loading';

const Register = () => {
    const [step, setStep] = useState(1);
    const [selected, setSelected] = useState('');
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phonenumber: '',
        address: '',
        role: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        // Validation before proceeding to the next step
        if (step === 1 && (!formData.name || !formData.email)) {
            alert("Please fill in all fields.");
            return;
        }
        if (step === 2 && !formData.phonenumber) {
            alert("Please enter your phone number.");
            return;
        }
        if (step === 3 && !formData.address) {
            alert("Please enter your address.");
            return;
        }
        if (step === 4 && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        setStep(step + 1);
    };

    const handlePrev = () => {
        if (step >= 1) {
            setStep(step - 1);
        }
    };

    const handleRoleSelect = (role) => {
        setSelected(role);
        setFormData({ ...formData, role });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await axios.post('https://rsr-app.onrender.com/api/auth/register', formData);
            alert('Registration successful!');
            localStorage.removeItem('token'); // Ensure no tokens are present
                navigate('/login', { state: { path: location.pathname } }); // Correct usage of navigate with state
               
        } catch (error) {
            console.log(error);
            alert('Error registering user: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };
    if(loading){
        return <Loading/>
    }
    
    return (
        <div className="container-fluid p-3 p-md-5 register d-flex flex-column align-items-center">
               <div style={{flex:'1'}}>
           {step === 1 && (
                <>
                    <Typography variant="h5" className='fw-bold'>Hello 👋, Welcome to RSR Travels</Typography>
                    <p className="fs-6">Enter your name and email to continue</p>
                    <TextField
                        fullWidth
                        label="Username"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" className='w-100 mt-3' onClick={handleNext} sx={{ mt: 2 }}>
                        Next
                    </Button>
                </>
            )}
            {step === 2 && (
                <>
                    <Typography variant="h5" className='fw-bold'>Hello {formData.name || "user"}👋, Enter Phone Number</Typography>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" className='w-100 mt-3' onClick={handleNext} sx={{ mt: 2 }}>
                        Next
                    </Button>
                    <Button variant="outlined" color="primary" className='w-100 mt-3' onClick={handlePrev} sx={{ mt: 2 }}>
                        Prev
                    </Button>
                </>
            )}
            {step === 3 && (
                <>
                    <Typography variant="h5" className='fw-bold'>Hello {formData.name || "user"}👋, Enter your Address</Typography>
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" className='w-100 mt-3' onClick={handleNext} sx={{ mt: 2 }}>
                        Next
                    </Button>
                    <Button variant="outlined" color="primary" className='w-100 mt-3' onClick={handlePrev} sx={{ mt: 2 }}>
                        Prev
                    </Button>
                </>
            )}
            {step === 4 && (
                <>
                    <Typography variant="h5" className='fw-bold'>Hello {formData.name || "user"}👋, Create your Password</Typography>
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" className='w-100 mt-3' onClick={handleNext} sx={{ mt: 2 }}>
                        Next
                    </Button>
                    <Button variant="outlined" color="primary" className='w-100 mt-3' onClick={handlePrev} sx={{ mt: 2 }}>
                        Prev
                    </Button>
                </>
            )}
            {step === 5 && (
                <>
                    <Typography variant="h5" className='fw-bold'>Select Role</Typography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <Card
                                sx={{ cursor: 'pointer' }}
                                onClick={() => handleRoleSelect('employee')}
                                className={selected === "employee" ? "selected" : null}
                            >
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <CheckCircleOutline sx={{ fontSize: 40 }} />
                                    <Typography variant="h6">Employee</Typography>
                                    <Typography variant="body2">Join as an employee.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card
                                sx={{ cursor: 'pointer' }}
                                onClick={() => handleRoleSelect('driver')}
                                className={selected === "driver" ? "selected" : null}
                            >
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <LocalTaxi sx={{ fontSize: 40 }} />
                                    <Typography variant="h6">Driver</Typography>
                                    <Typography variant="body2">Join as a driver.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" className='w-100 mt-3' onClick={handleSubmit} sx={{ mt: 2 }}>
                        Create account
                    </Button>
                    <Button variant="outlined" color="primary" className='w-100 mt-3' onClick={handlePrev} sx={{ mt: 2 }}>
                        Prev
                    </Button>
                </>
            )}
            {loading && <Typography variant="h6" sx={{ mt: 2 }}>Submitting...</Typography>}
           </div>
            <div className="div" >
            <p className="fs-6 mt-2">Do you have an account? <Link to='/login'>Login</Link></p>
            </div>
        
        </div>
    );
};

export default Register;
