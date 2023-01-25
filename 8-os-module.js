const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`System uptime : ${os.uptime()/3600} hrs`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs)