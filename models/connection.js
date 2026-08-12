import mongoose from "mongoose";

mongoose.connect('mongodb+srv://naqvishayan61:ZAZ2uFtNMVJzHTjp@cluster0.jli1c4f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection failed:', err));