import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import DashboardCard from './components/DashboardCard';
import DataChart from './components/DataChart';
import DataTable from './components/DataTable';

function App() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Users" value="1,200" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Sales" value="$23,000" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Orders" value="340" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Revenue" value="$50,000" />
        </Grid>

        {/* Chart */}
        <Grid item xs={12}>
          <Paper style={{ padding: '1rem' }}>
            <DataChart />
          </Paper>
        </Grid>

        {/* Table */}
        <Grid item xs={12}>
          <Paper style={{ padding: '1rem' }}>
            <DataTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
