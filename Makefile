include .env
export

IMAGE_NAME=qr-frontend

.PHONY: up build down

build:
    docker build -t $(IMAGE_NAME) .

up: build
    docker run -d --rm -p $(PORT):80 --name $(IMAGE_NAME) $(IMAGE_NAME)

down:
    docker stop $(IMAGE_NAME)