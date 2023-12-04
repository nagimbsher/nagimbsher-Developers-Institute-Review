import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = '#456%%%667876';

const token = jwt.sign(
  {name:'Jhon', email:'jj@gmail.com'},
  ACCESS_TOKEN_SECRET,
  {
    expiresIn:'60s'
  }
);

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmhvbiIsImVtYWlsIjoiampAZ21haWwuY29tIiwiaWF0IjoxNjc4MjA2NTM5LCJleHAiOjE2NzgyMDY1OTl9.5sbO0TWxPsCE6dNoe6TadlFMkDZlE4r6CPDqeUKyRbM`;

jwt.verify(token, '123456', (err,decoded)=>{
  if(err) return console.log(err);

  const name = decoded.name;
  const email = decoded.email;

  console.log(name,email);
})
