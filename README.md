React Redux Saga

npm install 

npm start


install kubectl
install doctl

kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" apply -f E:\SpringBoot\sanjeevani\helloworld\src\main\resources\mysql-configmap.yml
kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" apply -f E:\SpringBoot\sanjeevani\helloworld\src\main\resources\mysql-deployment.yml
kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" apply -f E:\SpringBoot\sanjeevani\helloworld\src\main\resources\helloworld-deployment.yml
kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" expose deployment helloworld --type=LoadBalancer --name=helloworld1





kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" delete deployments helloworld1
kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" delete deployments helloworld
kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" get deployments
kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" apply -f E:\SpringBoot\sanjeevani\helloworld\src\main\resources\helloworld-deployment.yml

kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" get pods

kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" describe service helloworld1



docker build -t rakeshpriyad/react-helloworld .


docker run -p 3000:3000 -d rakeshpriyad/react-helloworld

minikube ip

http://192.168.99.106:3000/



docker login --username=rakeshpriyad 

docker images




docker tag a948edb898a6 rakeshpriyad/react-helloworld:1.0

docker push rakeshpriyad/react-helloworld


kubectl --kubeconfig="k8s-1-18-6-do-0-blr1-1595860622424-kubeconfig.yaml" apply -f E:\SpringBoot\sanjeevani\react-helloworld\react-helloworld-deployment.yml















































============================================================================
4. Create connfig map using 
kubectl apply -f mysql-configmap.yml

kubectl get configmap
5. Create credentials
kubectl apply -f mysqldb-credentials.yml
kubectl get secrets

kubectl apply -f mysqldb-root-credentials.yml
kubectl get secrets



6. deploy mysql
kubectl apply -f mysql-deployment.yml
kubectl get deployments

7. create container from images using docker command

rkp/helloworld
docker build -t helloworld:2.0 .
docker image tag helloworld:1.0 rkp/helloworld


8. Deploy spring boot application 
kubectl apply -f helloworld-deployment.yml
kubectl get deployments
kubectl get pods
kubectl logs  <pod id>

minikube docker-env

SET DOCKER_TLS_VERIFY=1

SET DOCKER_HOST=tcp://192.168.99.101:2376

SET DOCKER_CERT_PATH=C:\Users\Acer\.minikube\certs

SET MINIKUBE_ACTIVE_DOCKERD=minikube
REM @FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env') DO @%i



docker login --username=rakeshpriyad 

docker images


docker tag cfdad5295940 rakeshpriyad/helloworld:2.0

docker push rakeshpriyad/helloworld