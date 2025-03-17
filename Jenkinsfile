pipeline {
    agent {
        node {
            label 'docker-node-agent-non-ssh'
        }
    }
    environment {
        DOCKER_IMAGE = 'himanshupradhan/major-website'
        DOCKER_TAG = "${BUILD_NUMBER}"
        KUBECONFIG = credentials('minikube-config')
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
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG -t $DOCKER_IMAGE:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
                // sh 'npm install'

                sh '''
                echo "doing test stuff this is changed.."
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
                sh 'docker push $DOCKER_IMAGE:latest'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                script {
                    sh "sed -i 's/<TAG>/${BUILD_NUMBER}/' k8s/deployment.yaml"

                    sh "kubectl --kubeconfig=$KUBECONFIG apply -f k8s/deployment.yaml"
                }
            }
        }
    }
}
