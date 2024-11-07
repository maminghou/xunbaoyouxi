class TreasureMap {
    static getMapPieces() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("找到了地图碎片!");
            }, 800);
        });
    }

    static getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    reject("没有线索可以解码!");
                }
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    static navigateMaze() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.3) {
                    reject("迷路了!需要重新开始迷宫之旅...");
                } else {
                    resolve("成功穿越迷宫!");
                }
            }, 1800);
        });
    }

    static searchTemple(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    reject("糟糕!遇到了神庙守卫!");
                }
                resolve("找到了一个神秘的箱子...");
            }, 2000);
        });
    }

    static unlockSecretMechanism() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("解锁了宝箱的秘密机关!");
            }, 1200);
        });
    }

    static openTreasureBox() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 1000);
        });
    }
}

async function startAdventure() {
    const storyElement = document.getElementById("story");
    storyElement.innerHTML = ""; // 清空之前的内容
    try {
        storyElement.innerHTML += `<p>${await TreasureMap.getMapPieces()}</p>`;
        const clue = await TreasureMap.getInitialClue();
        storyElement.innerHTML += `<p>${clue}</p>`;
        const location = await TreasureMap.decodeAncientScript(clue);
        storyElement.innerHTML += `<p>${location}</p>`;
        storyElement.innerHTML += `<p>${await TreasureMap.navigateMaze()}</p>`;
        const box = await TreasureMap.searchTemple(location);
        storyElement.innerHTML += `<p>${box}</p>`;
        storyElement.innerHTML += `<p>${await TreasureMap.unlockSecretMechanism()}</p>`;
        const treasure = await TreasureMap.openTreasureBox();
        storyElement.innerHTML += `<p>${treasure}</p>`;
    } catch (error) {
        storyElement.innerHTML += `<p style="color: red;">任务失败: ${error}</p>`;
    }
}
