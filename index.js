var binwrap = require("binwrap");

module.exports = binwrap({
    dirname: __dirname,
    binaries: [
        // "goreleaser_test"
        "drum-roll",
    ],
    verbose: true,
    urls: {
        "darwin-x64": "https://github.com/icecream78/goreleaser_test/releases/download/v0.1.4/goreleaser_test_0.1.4_darwin_amd64.tar.gz",
        "linux-x64": "https://github.com/icecream78/goreleaser_test/releases/download/v0.1.4/goreleaser_test_0.1.4_linux_amd64.tar.gz",
        "win32-x64": "https://github.com/icecream78/goreleaser_test/releases/download/v0.1.4/goreleaser_test_0.1.4_windows_amd64.tar.gz",
        "win32-ia32": "https://github.com/icecream78/goreleaser_test/releases/download/v0.1.4/goreleaser_test_0.1.4_windows_386.tar.gz",
    },
});
