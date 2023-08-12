import { Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: theme.palette.mode === 'light' ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : '0px 4px 6px rgba(255, 255, 255, 0.1)',
  background: theme.palette.mode === 'light' ? '#fff' : '#333',
  borderRadius: '12px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 8 }}>
      <Typography variant="h2" gutterBottom align='center'>
        Discover ReStore
      </Typography>
      <StyledPaper>
        <Typography variant="body1" paragraph fontSize="1.2rem">
          ReStore is your gateway to a modern and delightful online shopping experience. Our innovative platform brings
          together cutting-edge technologies and thoughtful design to make your shopping journey seamless and secure.
        </Typography>
        <Typography variant="body1" paragraph fontSize="1.2rem">
          Immerse yourself in a world of products carefully curated to meet your needs. With a powerful frontend built
          using React and Redux, you can effortlessly explore our catalog, manage your cart, and experience intuitive
          navigation.
        </Typography>
        <Typography variant="body1" paragraph fontSize="1.2rem">
          Behind the scenes, our backend, crafted with C# .NET MVC, ensures a robust foundation for authentication,
          product data management, and efficient order processing. APIs seamlessly connect frontend and backend,
          enhancing your interactions.
        </Typography>
        {/* ... other sections ... */}
      </StyledPaper>
    </Container>
  );
};

export default AboutPage;
