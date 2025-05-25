include .env
export

.PHONY: up build down rebuild

build:
    docker compose build

up:
    docker compose up -d --build

down:
    docker compose down

rebuild:
    docker compose down
    docker compose up -d --build