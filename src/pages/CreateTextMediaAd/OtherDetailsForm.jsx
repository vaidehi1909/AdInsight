import React from "react";
import { TextField, Grid, InputLabel, styled } from '@mui/material';

const BoldInputLabel = styled(InputLabel)`
  font-weight: bold;
`;

const OtherDetailsForm = ({ form }) => {
  const { register, formState: { errors } } = form
  return (
    <>
    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
      <Grid item xs={12} md={6}>
        <BoldInputLabel htmlFor="business_name">Business Name</BoldInputLabel>
        <TextField
          id="business_name"
          name="business_name"
          placeholder="Add your business name"
          {...register('business_name')}
          error={!!errors.business_name}
          helperText={errors.business_name?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BoldInputLabel htmlFor="button_lable">Button Label</BoldInputLabel>
        <TextField
          id="button_lable"
          name="button_lable"
          placeholder="select a label that best suits for your ad"
          {...register('button_lable')}
          error={!!errors.button_lable}
          helperText={errors.button_lable?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
    </Grid>
    <Grid container sx={{ marginBottom: '20px' }}>
      <Grid item xs={12}>
        <BoldInputLabel htmlFor="webiste_url">Website URL</BoldInputLabel>
        <TextField
          id="webiste_url"
          name="webiste_url"
          placeholder="Add the url of the landing page you want to redirect users to"
          {...register('webiste_url')}
          error={!!errors.webiste_url}
          helperText={errors.webiste_url?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
    </Grid>
    </>
  );
}

export default OtherDetailsForm;
