rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:coderyjw/jw-ui-website.git &&
git push -f -u origin master &&

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:coderyjw/jw-ui-website.git &&
git push -f -u origin master &&

cd -
echo https://coderyjw.github.io/jw-ui-website/