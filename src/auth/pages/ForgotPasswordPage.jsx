import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@') , 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'El Password debe tener al menos 6 letras'],
  displayName: [(value) => value.length >= 1, 'El Nombre es obligatorio'],
}

export const ForgotPasswordPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );
  
  const { 
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }


  return (
    <AuthLayout title="Crear Cuenta">
      <form
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={ onSubmit }
      >
          <Grid container>
            <Grid item xs={ 12 } sx={{mt: 2}}>
              <TextField
                label="Nombre"
                type="text"
                placeholder="Nombre"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ formSubmitted && displayNameValid }
              ></TextField>
            </Grid>
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
              ></TextField>
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
              ></TextField>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid
                item
                xs={ 12 }
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
              <Grid item xs={ 12 }>
                <Button
                  type="submit"
                  variant='contained'
                  fullWidth
                  disabled={ isCheckingAuthentication || (formSubmitted && !isFormValid )}
                >
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
