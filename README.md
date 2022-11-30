# Requirements
- Docker engine
- Docker compose

# Installation

```bash
cd docker
sudo docker compose up

# Mở terminal mới để chạy
sudo docker exec -it -u node Rocket.Chat.dev /bin/bash
yarn && yarn build
cd apps/meteor/ && yarn && yarn start
```

```
# Sau khi chạy `sudo docker compose up` ở trên mà stdout báo `docker-mongo-init-replica-1  | exiting with code 1`, tiến hành khởi động lại bằng 
sudo docker restart docker-mongo-init-replica-1

# Sau đó tiếp tục chạy các lệnh tiếp sau
# Dịch vụ chạy trên cổng 3000
```
