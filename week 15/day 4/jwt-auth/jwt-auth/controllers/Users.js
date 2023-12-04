import Users from '../model/UsersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async(req,res) => {
  try {
    const users = await Users.findAll({
      attributes:['id','email']
    })
    res.json(users)
  } catch (e) {
    console.log(e);
    res.status(404).json({msg:'not found'})
  }
}

export const register = async(req,res) => {
  const {email,password} = req.body;
  const salt = await bcrypt.genSalt(10);
  const hassPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      email: email.toLowerCase(),
      password: hassPassword
    });
    res.status(200).json({msg:'Register Succesful'})
  } catch (e) {
    console.log(e);
    res.status(404).json({msg: 'Email already exist'})
  }
}

export const login =  async(req,res)=>{
  try {
    const users = await Users.findAll({
      where:{
        email:req.body.email.toLowerCase()
      }
    });

    const match = await bcrypt.compare(req.body.password, users[0].password );
    if(!match) return res.status(400).json({msg:'Wrong password'})

    const userid = users[0].id;
    const email = users[0].email;

    const token = jwt.sign({userid,email}, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn:'60s'
    })

    res.cookie('accesstoken', token, {
      httpOnly:true,
      maxAge: 60 * 1000
    })

    res.json({token:token})

  } catch (e) {
    console.log(e);
    res.status(404).json({msg:'Email.not found'})
  }
}
