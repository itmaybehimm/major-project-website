pipeline {
    agent { 
        node {
            label 'docker-alpine-node'
        }
    }
    environment {
        DOCKER_IMAGE = "himanshupradhan/major-website"
        DOCKER_TAG = "latest"
    }
    triggers {
        githubPush()
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                npm install
                '''
                sh '''
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff this is changed.."
                '''
            }
        }
        stage('Docker Build') {
            steps {
                echo "Building Docker Image..."
                sh 'systemctl status docker'
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.. "
                '''
            }
        }
         stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo "Deploying to Production..."
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
                // sh 'ssh user@production-server "docker pull $DOCKER_IMAGE:$DOCKER_TAG && docker run -d $DOCKER_IMAGE:$DOCKER_TAG"'
            }
        }
    }
}
