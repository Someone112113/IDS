set -e

echo > .nojekyll

npm run build

cd dist
git init
git add -A
git commit -m "Deploy"

cd -