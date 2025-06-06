# 🧠 System Resource Monitor (CPU + RAM)

A simple Node.js terminal app to monitor your system's CPU and RAM usage in real time.

## 🚀 Features

- ⏱️ Real-time CPU usage (per thread)
- 💾 RAM usage with percentage
- 🎨 Colored CLI output using [chalk](https://www.npmjs.com/package/chalk)
- Refreshes every second

## 📦 Dependencies

- Node.js built-in `os` module
- [chalk](https://www.npmjs.com/package/chalk)

Install `chalk`:

```bash
npm install chalk
```

## 🧪 Run it

```bash
node index.js
```

## 🚀 Example Output

```bash
====CPU USAGE MONITOR====
┌─────────┬────────┬─────────┐
│ (index) │ thread │ usage   │
├─────────┼────────┼─────────┤
│    0    │   1    │ '23.56%'│
│    1    │   2    │ '17.89%'│
└─────────┴────────┴─────────┘

====RAM USAGE MONITOR====
RAM : 4.32 GB / 8.00 GB
RAM Using: 54.00 %
```
