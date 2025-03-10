import './App.css';
import { motion } from 'framer-motion';

// High-quality images from Unsplash
const flowerImage = "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80"; // Beautiful pink roses
const heartImage = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"; // Red heart bokeh
const balloonImage = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"; // Colorful balloons

function App() {
  return (
    <div className="App">
      <div className="background-effects">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            initial={{ y: -10, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 10,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <motion.header 
        className="App-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3
          }}
        >
          Happy 25th Birthday, Danielle! 🎉
        </motion.h1>
        
        <motion.div 
          className="card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Congratulations on your new role as a Data Researcher at Cyera! 🚀
          </motion.p>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            You bring beauty and intelligence to everything you do, just like your love for flowers. 🌸
          </motion.p>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Here's to a year filled with joy, success, and lots of friends and family time! 🎊
          </motion.p>
        </motion.div>

        <motion.div 
          className="image-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring" }}
        >
          <motion.img 
            src={flowerImage} 
            alt="Flowers" 
            className="animated-image"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.img 
            src={heartImage} 
            alt="Hearts" 
            className="animated-image"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.img 
            src={balloonImage} 
            alt="Balloons" 
            className="animated-image"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.header>
    </div>
  );
}

export default App;
