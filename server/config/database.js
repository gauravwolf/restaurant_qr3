import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://gauravjain20059_db_user:gauravjain0902@cluster0.gvnvipr.mongodb.net/'
    );
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;