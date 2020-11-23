const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "kaito",
  // mongoUri: process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/mernproject'
  mongoUri: 'mongodb+srv://kaito:kaitoryouga@cluster-learn.ysvwg.mongodb.net/User?retryWrites=true&w=majority'
}

export default config
// mongodb+srv://kaito:kitoryouga@cluster-learn.ysvwg.mongodb.net/<dbname>?retryWrites=true&w=majority