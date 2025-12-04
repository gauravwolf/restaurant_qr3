import express from 'express';
import dbConnect from './config/database.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors'
import TableRoutes from './routes/table.route.js'
import verifyToken from './middlewares/verifyToken.js';
import checkRole from './middlewares/checkRole.js';
import sessionRoutes from './routes/session.route.js'
const app = express();
app.use(cors({
  origin : ['http://localhost:5173','http://localhost:5174'],
  
}))
//NOTE fn used for mongodb connection
dbConnect();
app.use(express.json())
app.get('/menu', verifyToken, checkRole(['customer', 'admin']), (req,res)=>{res.send('menu fetched')
})
app.get('/', (req, res) => {
  res.send('THIS IS MY HOMEPAGE');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1' ,TableRoutes ) ;
app.use('/api/v1' , sessionRoutes)

//here we placed the global error handleer => 
  app.use((err,req,res,next)=>{
    if(err){
      res.status(err.status || 500).json({
        messsage : err?.message || 'server error'
      })
    }
  })
app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
 