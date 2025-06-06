.PHONY: up build down rebuild push pull

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

rebuild:
	docker compose up -d --build

push:
	docker push ${IMAGE_APP}

pull:
	docker pull ${IMAGE_APP}
