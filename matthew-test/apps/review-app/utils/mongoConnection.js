import mongoose from 'mongoose';

const db = async () =>
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default db;
