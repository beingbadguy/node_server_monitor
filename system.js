import os from "node:os";
import chalk from "chalk";

function cpuUsage(oldCpu, newCpu) {
  const oldCpuTimes = oldCpu.times;
  const newCpuTimes = newCpu.times;
  const idleDiff = newCpuTimes.idle - oldCpuTimes.idle;
  const totalOld = Object.values(oldCpuTimes).reduce((a, b) => a + b,0);
  const totalNew = Object.values(newCpuTimes).reduce((a, b) => a + b,0);
  const total = totalNew - totalOld;
  const percentageUsedUsage = ((total - idleDiff) / total) * 100;

  return percentageUsedUsage.toFixed(2) + "%";
}
function memoryUsage() {
  const totalRam = os.totalmem() / (1024 * 1024 * 1024);
  const freeRam = os.freemem() / (1024 * 1024 * 1024);
  const currentUsingRam = totalRam - freeRam;
  const usedRamPercentage = ((totalRam - freeRam) / totalRam) * 100;
  const decoratedCurrectUsingRam = currentUsingRam.toFixed(2);
  const decoratedTotalRam = totalRam.toFixed(2);

  console.log(chalk.bgMagentaBright("====RAM USAGE MONITOR===="));

  console.log(
    chalk.green(
      "RAM :",
      decoratedCurrectUsingRam,
      "GB /",
      decoratedTotalRam,
      "GB"
    )
  );
  console.log(chalk.magenta("RAM Using:", usedRamPercentage.toFixed(2), "%"));
}

function serverTracker() {
  const oldCpus = os.cpus();

  setTimeout(() => {
    const newCpu = os.cpus();

    const cpu = newCpu.map((_, index) => {
      return {
        thread: index + 1,
        usage: cpuUsage(oldCpus[index], newCpu[index]),
      };
    });
    console.log(chalk.bgMagentaBright("====CPU USAGE MONITOR===="));

    console.table(cpu);

    memoryUsage();
  }, 1000);
}

setInterval(serverTracker, 1000);
