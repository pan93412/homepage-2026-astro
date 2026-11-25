{
  description = "Astro portfolio development tools";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ];
      forEachSystem = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forEachSystem (
        system:
        let
          pkgs = import nixpkgs {
            inherit system;
            overlays = [
              # Newer than nixpkgs; its tests need the network and a .git directory. Drop this
              # when nixpkgs has 2.6.0 or later.
              (final: prev: {
                jactionlint = prev.jactionlint.overrideAttrs (old: rec {
                  version = "2.6.0";
                  src = final.fetchFromGitHub {
                    owner = "jdx";
                    repo = "jactionlint";
                    tag = "v${version}";
                    hash = "sha256-ikUVmurWrKP18XMth0lhnsvF0JT4gVoiNGTN+5AAL3U=";
                  };
                  vendorHash = "sha256-jf7hKPnaSl4iTYT0mtRRAEmgLKAA/lj0vSVoO9+iOvw=";
                  doCheck = false;
                });
              })
            ];
          };
          # The end-to-end tests run on this Chromium; @playwright/test is pinned to the same version.
          browsers = pkgs.playwright-driver.browsers.override {
            withFirefox = false;
            withWebkit = false;
            withFfmpeg = false;
          };
        in
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
              bun
              nodejs_24
              git
              jactionlint
              shellcheck
              nixfmt
              # pyftsubset cuts LINE Seed TW down to the characters the built pages use.
              (python3.withPackages (p: [
                p.fonttools
                p.brotli
              ]))
            ];
            env = {
              PLAYWRIGHT_BROWSERS_PATH = "${browsers}";
              PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = "true";
            }
            # Native frontend dependencies need libstdc++ on non-NixOS Linux runners.
            // pkgs.lib.optionalAttrs pkgs.stdenv.hostPlatform.isLinux {
              LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc.lib ];
            };
          };
        }
      );
      formatter = forEachSystem (system: nixpkgs.legacyPackages.${system}.nixfmt);
    };
}
