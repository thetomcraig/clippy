import { packager } from "@electron/packager";
import * as path from "node:path";

(async () => {
    console.log("Packaging...");

    await packager({
        dir: __dirname,
        out: "dist",
        overwrite: true,
        ignore: [whitelistToIgnore(["out", "node_modules", "package.json"]), ".map$"],
    });
})();

function whitelistToIgnore(whitelist: string[]) {
    return `^/(?!(${whitelist.join("|")}))`;
}
