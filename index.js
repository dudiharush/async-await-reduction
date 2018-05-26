const Promise = require("bluebird");

(async () => {
    let getTotalSize = async (fileNames) => {
        const totalSize = await Promise.reduce(fileNames, async function (accSize, fileName) {
            let fileSize = await Promise.resolve(+fileName);
 // getting the file size async
            return accSize + fileSize;
        }, 0);
        return totalSize;
    }
    console.log(await getTotalSize(["1", "2", "3"]));
})();