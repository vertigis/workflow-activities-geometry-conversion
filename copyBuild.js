const spawn = require("cross-spawn");
const fs = require("fs");
const path = require("path");

const packagesRootDir = path.join(__dirname, "packages");

const packageDirs = fs
    .readdirSync(packagesRootDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && dirent.name !== "node_modules");

const checkSpawnSyncResult = (syncResult) => {
    if (syncResult.status !== 0) {
        process.exit(1);
    }
};

for (const packageDir of packageDirs) {
    checkSpawnSyncResult(
        spawn.sync(
            "copyfiles",
            [
                `-u 3`,
                `packages/${packageDir.name}/build/**/*.*`,
                `build/${packageDir.name}`,
            ],
            {
                stdio: "inherit",
            }
        )
    );
}
