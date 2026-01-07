# Welcome to Soc Ops 🎉

Welcome! This is a small, local-first Social Bingo app used for in-person mixers. Below is a tiny tour to get you up and running quickly.

## Quick Start ⚡
- Install dependencies: 
pm ci
- Start dev server: 
pm run dev and open http://localhost:5173
- Run tests: 
pm test
- Lint: 
pm run lint
- Build for production: 
pm run build

## Where to look 🔍
- Questions: src/data/questions.ts (change or add new questions)
- Game logic: src/utils/bingoLogic.ts and src/hooks/useBingoGame.ts
- UI components: src/components/* (e.g., GameScreen, BingoBoard)

## Contributing 🤝
1. Fork the repo and create a feature branch
2. Run 
pm ci and 
pm run dev locally
3. Add tests and update docs
4. Open a PR and describe your changes

Have fun! If something's unclear, check CONTRIBUTING.md or open an issue.
