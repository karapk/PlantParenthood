export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
  
      console.log('Form Data:', { name, email, message });
  
      try {
    
  
        res.status(200).json({ message: 'Form submitted successfully!' });
      } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).json({ message: 'An error occurred. Please try again later.' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  