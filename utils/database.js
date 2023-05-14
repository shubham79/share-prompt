import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });

    isConnected = true;

    console.log('MongoDB is connected');
  } catch (error) {
    console.log('error', error);
  }
};
