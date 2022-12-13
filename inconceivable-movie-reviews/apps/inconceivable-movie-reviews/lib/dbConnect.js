import mongoose from 'mongoose';

// The dbConnect file is what connects the database to our Mongoose middle-ware.  It utilizes the MONGODB_URI to talk to our database.

const MONGODB_URI = process.env.MONGODB_URI;

// If there is no MONGODB_URI variable, throw an error telling the user to define it in the .env.local file.
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// This is the function that is called in various places of the application.  If we have a connection, then we return a 'cached.conn' that authenticates the fact that we are connected to the database.
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
