import React from "react";
import { TextField, Grid, InputLabel, styled } from '@mui/material';

const BoldInputLabel = styled(InputLabel)`
  font-weight: bold;
`;

const TextAdForm = ({ form }) => {
  const { register, formState: { errors } } = form
  return (
    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
      <Grid item xs={12} md={6}>
        <BoldInputLabel htmlFor="heading_1">Heading 01</BoldInputLabel>
        <TextField
          id="heading_1"
          name="heading_1"
          placeholder="Add a heading that would make users interested"
          {...register('heading_1')}
          error={!!errors.heading_1}
          helperText={errors.heading_1?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
        <BoldInputLabel htmlFor="heading_2" sx={{ marginTop: '20px' }}>Heading 02</BoldInputLabel>
        <TextField
          id="heading_2"
          name="heading_2"
          placeholder="Add a heading that would make users interested"
          {...register('heading_2')}
          error={!!errors.heading_2}
          helperText={errors.heading_2?.message}
          fullWidth
          sx={{ '& .MuiInputBase-input': { padding: '10px' } }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
      <BoldInputLabel htmlFor="description">Description 01</BoldInputLabel>
        <TextField
          id="description"
          name="description"
          placeholder="Description"
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
          fullWidth
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
}

export default TextAdForm;
