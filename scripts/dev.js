// 这个文件会帮我们打包 packages下的模块，最终打包出JS文件

// node 打包的文件名 打包的文件格式 [-f iife/esm/cjs]
// 参数：文件名 + 文件格式 === argv

// package.json 中加type：module可以这样引入
import minimist from "minimist";

// node中的命令行数参数通过process 来获取 process.argv
const args = minimist(process.argv.slice(2));

const target = args._[0] || "reactivity"; // 打包哪个项目
const format = args.f || "iife"; // 打包后的模块化规范

console.log(target, format);