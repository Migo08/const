import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { startLoginWithEmailPassword } from '../../store/slices/auth';

const formData = {
  email: '',
  password: ''
}
const formValidations = {
  email: [(value) => value.includes('@') , 'El correo debe tener un @'],
  password: [(value) => value.length >= 1, 'El password no puede estar vacio'],
}

export const LoginPage = () => {
  
  const { email, password, onInputChange,
    emailValid, passwordValid, isFormValid} = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage  } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return;

    dispatch(startLoginWithEmailPassword({ email, password }));
    
  }

  return (
    <AuthLayout title="Login">
      <form 
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={ onSubmit }
      >
          <Grid container>
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Email@gmail.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ formSubmitted && emailValid }
              />
            </Grid>
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="********"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted }
                helperText={ formSubmitted && passwordValid }
              />
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid
                  item
                  xs={ 12 }
                  display={ !!errorMessage ? '' : 'none' }
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  type="submit"
                  variant='contained'
                  fullWidth
                  disabled={ isAuthenticating }
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
