console.log("Hello World!");
// const tf = require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
 
console.log("TensorFlow.js version information: ");
console.log(tf.version);
tf.backend()
 
console.log(`TensorFlow.js backend: ${tf.getBackend()}`);
