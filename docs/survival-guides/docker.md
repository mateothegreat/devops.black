---
id: docker
title: The Docker Survival Guide
---

This guide is meant to be tactical and straight to the point and is
by no means a complete list of _all_ commands. See links below for more details.

## Getting started

### One-line install

```bash
curl -sSL https://get.docker.com | sh
```
## Common commands

### Show all containers

This will show all containers running or not:

```bash
docker ps -a
```

### Removing things

#### Stop and remove a container

```bash
docker rm -f <container name>
```

#### Remove unused resources

This will remove all unused images and volumes:

```bash
docker system prune -a --volumes -f
```

### Restarting containers

#### Restart all containers:

```bash
docker restart $(docker ps -a -q)
```

#### Restart only by status:

```bash
docker start $(docker ps -a -q -f status=exited)
```

### Inside the container

#### Grab a shell inside a running container

```bash
docker exec -it <container name> sh
```

#### Grab a shell inside a new container

```bash
docker run -it <container name> sh
```

## Files

### Backup

```bash
docker container run --rm --volumes-from <source container name or id>:ro -v $(pwd):/backup alpine tar cvf /backup/backup_$(date +%Y-%m-%d_%H-%M).tar /data
```

### Restore

```bash
docker container run --rm --volumes-from <target container name or id>:ro -v $(pwd):/backup alpine tar xvf /backup/backup.tar
```
## Filtering

### Filter by image name

```bash
docker ps --filter ancestor=nginx
```
### Filter by exit code

```bash
docker ps -a --filter 'exited=0'
```

## Images

### Search dockerhub

```bash
docker search --filter stars=3 --no-trunc nginx
```
### History

```bash
docker image history --no-trunc=true $(docker container inspect -f '{{.Image}}' <container name or id>)
```
## Monitoring

### Container Processes

```bash
docker container stats <container name or id> 
```

### Container Usage

```bash
docker container stats <container name or id> 
```

### Following logs

#### Follow and grab the last N lines

```bash
docker container logs -f --tail=100 <container name or id>
```
## Networking

### Get ip addresses

```bash
docker inspect --format="{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}"
```

## System

### Get events

```bash
docker system events --since <timestamp>
```

### Get disk usage

```bash
$ docker system df

TYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE
Images              110                 63                  52.1GB              33.94GB (65%)
Containers          134                 1                   3.74GB              3.74GB (99%)
Local Volumes       62                  21                  10.25GB             8.105GB (79%)
Build Cache         370                 0                   8.126GB             8.126GB
```

## Volumes

### Show mount points

```bash
docker container inspect -f '{{ range .Mounts }}{{ .Name }}:{{ .Destination }} {{ end }}' <container name or id>
```
## Must have links

* https://github.com/veggiemonk/awesome-docker
* https://docs.docker.com/engine/reference/commandline/docker
