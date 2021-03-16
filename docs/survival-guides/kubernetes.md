---
id: kubernetes
title: The Kubernetes Survival Guide
---

This guide is meant to be tactical and straight to the point and is
by no means a complete list of _all_ commands. See links below for more details.


## Contexts

### List available contexts

```bash
kubectl config get-contexts
```

### Switch to a context

```bash
kubectl config use-context some-awesome-cluster-123
```

### Rename a context

```bash
kubectl config rename-context some-awesome-cluster-123 simplename
```

## Monitoring

### Usage by node

```bash
kubectl top node
```

### Usage by pod

```bash
kubectl top pod
```

or watch it:

```bash 
watch kubectl top pod
```

## RBAC

### Create a cluster admin user

```bash
kubectl create clusterrolebinding my-super-admin-role --clusterrole=cluster-admin --user="system:serviceaccount:<namespace>:<service-account-name>"
```

## Workloads

### Testing a config (dry-run)

```bash
kubectl create -f my.yaml --dry-run --validate=true
```

### Scale replicas

```bash
kubectl scale --replicas=2 deployment nginx
```
