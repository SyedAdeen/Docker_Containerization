const {User} = require('../models');
const {UserCar} = require('../models')
const { Sequelize } = require('sequelize');
const {City} = require('../models');

const getusercity = async(req,res)=>{
    try {
        const userWithCity = await User.findOne({
            where: { username: req.params.username },
            attributes: ['username'],
            include: [{
              model: City,
              attributes: ['city'],
            
            }]
          });
          if (!userWithCity) { 
            return res.status(404).json({ message: 'User not found' });
          }
          else{
              const result = {
                  username: userWithCity.username,
                  city: userWithCity.Cities[0].city
                };
            
                res.json(result);
          }
      
  
        } catch (error) {
          console.error(error);
          res.status(500).json({ message:"Not Found",  });
        }
}


const postUser = async (req,res)=>{
    try {
        const { username, age } = req.params;
        console.log(username);
        console.log(age);

        const user = await User.create({ username, age });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error); 
        res.status(500).json({
            msg: "Error Occurred",
            error: error.message 
        });
    }
}


const getUser = async (req,res)=>{

    try {
        const users = await User.findAll();
        res.json(users);
        // res.json(users.map(user=>user.age));

    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({
            msg: "Error Occurred",
            error: error.message 
        });
    }
}


const editUser = async (req,res)=>{
    try {
        
        const user = await User.findByPk(req.params.id);
        if(user)
        {
            await user.update({age:req.params.age});
            res.json(user);
        }
        else{
            res.json({
                msg:"User Not Found",
            })
        }
    } catch (error) {
        console.error('Error Updating user:', error); 
        res.status(500).json({
            msg: "Error Occurred",
            error: error.message 
        });
    }
}


const deleteUser = async(req,res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
          await user.destroy();
          res.json({ message: 'User deleted' });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}

const getUserCar = async(req,res)=>{

    try {
        const userWithCar = await User.findOne({
            where: { username: req.params.username },
            attributes: ['username'],
            include: [{
              model: UserCar,
              attributes: ['car'],
              on: {
                username: { [Sequelize.Op.eq]: Sequelize.col('User.username') }
              }
            }]
          });
    
        if (!userWithCar) { 
          return res.status(404).json({ message: 'User not found' });
        }
        else{
            const result = {
                username: userWithCar.username,
                car: userWithCar.UserCars[0].car
              };
          
              res.json(result);
        }
    

      } catch (error) {
        console.error(error);
        res.status(500).json({ message:"Not Found",  });
      }
}


const getuserAge = async (req,res)=>{
    try {

        // const rawQuery = `SELECT username, age FROM Users WHERE age > :minAge`;
        // const users = await sequelize.query(rawQuery, {
        // replacements: { minAge: 25 },
        // type: Sequelize.QueryTypes.SELECT
        // });

        const user = await User.findAll({
            attributes:[
            ['username','UserName'],
            'age'
        ]
        })

        if(user)
        {
            res.status(200).json(user)
        }
        else{
            res.status(400).json({msg:"User Not Found"});
        }
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }


}

const maxAge = async(req,res)=>{
    try {
        const maxage = req.query.maxAge;
        console.log('Age = ', maxage);
        const user = await User.findAll({
            attributes:['username','age'],
            where:{
                age:{
                    [Sequelize.Op.gt]:maxage
                }
            }
        })
        
        if(user)
            {
                res.status(200).json(user)
            }
            else{
                res.status(400).json({msg:"User Not Found"});
            }
            
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
}


const paging = async(req,res) =>{

    const page = parseInt(req.params.page);
    const limit = parseInt(req.params.limit);

    const offset = (page-1)*limit;

    try {
        const users= await User.findAndCountAll({
            limit:limit,
            offset:offset
        });
        res.status(200).json({
            totalItems: users.count,
            totalPages: Math.ceil(users.count / limit),
            currentPage: page,
            users: users.rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}






module.exports = {
    postUser,getUser,editUser,deleteUser,getUserCar, getuserAge, maxAge, paging,getusercity
};
