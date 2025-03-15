pipeline {
    agent {
        node {
            label 'docker-node-agent-non-ssh'
        }
    }
    environment {
        DOCKER_IMAGE = 'himanshupradhan/major-website'
        DOCKER_TAG = 'latest'
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Login') {
            steps {
                echo 'Logging in to DockerHub...'
                withCredentials([usernamePassword(credentialsId: 'himanshupradhan-dockerhub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                }
            }
        }
        stage('Build Docker') {
            steps {
                echo 'Building Docker Image...'
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm install'

                sh '''
                echo "doing test stuff this is changed.."
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'

                withKubeConfig([credentialsId: 'minikube-mac']) {
                    sh 'kubectl apply -f k8s/deployment.yaml'
                    sh 'kubectl apply -f k8s/service.yaml'
                    sh 'kubectl apply -f k8s/ingress.yaml'
                                }
            }
        }
    }
}
