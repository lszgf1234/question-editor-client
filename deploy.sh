# 发生错误时终止 set -e
# cd 到 项目目录
# 拉取项目
# 更新包
# 重启服务

set -e
git pull
npm i
npm run build
npm run pro:restart

