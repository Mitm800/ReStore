import { Container, Typography, Paper, ThemeProvider, createTheme, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: '12px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const Note = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '1.2rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

const contactInfo = {
  Name: 'Mitkumar Malavia',
  Email: 'mitm800@gmail.com',
  Phone: '647-877-1579',
  LinkdIn: 'www.linkedin.com/in/mitkumar-malavia'
};

const renderTable = (theme: Theme) => {
  return (
    <TableContainer component={Paper} style={{ border: `1px solid ${theme.palette.divider}` }}>
      <Table style={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ padding: '12px', backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default, fontWeight: 'bold' }}>Contact Method</TableCell>
            <TableCell style={{ padding: '12px', backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default, fontWeight: 'bold' }}>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(contactInfo).map(([method, details], index) => (
            <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? (theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper) : 'inherit' }}>
              <TableCell style={{ padding: '12px', textAlign: 'left', fontSize: '1.2rem' }}>{method}</TableCell>
              <TableCell style={{ padding: '12px', textAlign: 'left', fontSize: '1.2rem' }}>{details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ContactPage = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 8 }}>
        <Typography variant="h2" gutterBottom align='center'>
          Get in Touch
        </Typography>
        <StyledPaper>
          {renderTable(theme)}
        </StyledPaper>
        <Note>
          Feel free to reach out for any inquiries.
        </Note>
      </Container>
    </ThemeProvider>
  );
};

export default ContactPage;
