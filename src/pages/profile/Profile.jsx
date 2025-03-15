/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import { Box, Stack, TextField, Button, Snackbar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form"
import { useState } from 'react';

const emilRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// eslint-disable-next-line no-useless-escape
const phoneRegExp = "^01[0-2]\d{1,8}$;"
const data = [
  {
    value: 'admin',
    label: 'admin',
  },
  {
    value: 'manager',
    label: 'manager',
  },
  {
    value: 'user',
    label: 'user',
  }
];

export default function profile() {

  const handleClick = () => {
    setOpen(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = () => {
    handleClick()
  }


  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (
    <Box
     onSubmit={handleSubmit(onSubmit)}
    component="form"
    sx={{ display: 'flex', flexDirection:"column", gap: 2 }}
    noValidate
    autoComplete="off"
  >
    <Stack direction="row" spacing={2}>
      <TextField
        error={Boolean(errors.firstName)}
        helperText={errors.firstName ? "this filed name is required" : ""}
        {...register("firstName", { required: true, minLength: 3 })}
        sx={{flexGrow:1}}
          label="first name"
          variant="filled" 
          />
      <TextField sx={{flexGrow:1}}  label="last name" variant="filled" 
        error={Boolean(errors.lastName)}
        helperText={errors.lastName ? "this field is required" : ""}
        {...register("lastName", { required: true, minLength: 3 })} 
        />
    </Stack>

    <TextField id="filled-basic" label="email" variant="filled"       
        error={Boolean(errors.Email)}
        helperText={errors.Email ? "please provide a valid email address" : ""}
        {...register("Email", { required: true, pattern: emilRegExp })} 
         />
    <TextField id="filled-basic" label="phone number" variant="filled"      
        error={Boolean(errors.phone)}
        helperText={errors.phone ? "this field is required" : ""}
        // @ts-ignore
        {...register("phone", { required: true, minLength: 11, pattern: phoneRegExp })} 
        />
    <TextField id="filled-basic" label="address 1" variant="filled" />
    <TextField id="filled-basic" label="address 2" variant="filled" />

    <TextField
          select
          label="Select"
          defaultValue="user"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit" variant="contained" color="primary" sx={{alignSelf:"center"}}>
          Create New User
        </Button>

        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        severity="success"
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="account created successfully."
      />
  </Box>
);
}
