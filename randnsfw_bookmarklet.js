javascript:(function(){const fileUrl="https://raw.githubusercontent.com/Tharic99/randnsfw/refs/heads/main/Subs2024.txt";fetch(fileUrl).then(t=>{if(!t.ok)throw new Error("Failed to fetch the file.");return t.text()}).then(t=>{const n=t.split("\n").map(t=>t.trim()).filter(t=>/^[0-9]+\|/.test(t)).map(t=>t.split("|")[1]?.trim()).filter(t=>t);if(0===n.length)throw new Error("No valid subreddits found.");const e=n[Math.floor(Math.random()*n.length)];window.open(`https://www.reddit.com/${e}`,"_blank")}).catch(t=>{alert("Error: "+t.message)})})();