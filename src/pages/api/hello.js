// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


fetch('http://localhost:3000')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.name); // Output: 'John Doe'
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

