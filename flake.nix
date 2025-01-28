{
  description = "Nix Flake for a Node.js development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            nodePackages.pnpm
          ];

          shellHook = ''
            echo "Node.js development environment"
            echo "Node.js version: $(node --version)"
            echo "PNPM version: $(pnpm --version)"
          '';
        };
      });
}