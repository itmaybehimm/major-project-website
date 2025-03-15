pipeline {
    agent { 
        node {
            label 'docker-node-agent-non-ssh'
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
          stage('Login') {
           steps {
                echo "Logging in to DockerHub..."
                withCredentials([usernamePassword(credentialsId: 'himanshupradhan-dockerhub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                }
            }
        }
        stage('Build') {
           steps {
                echo "Building npm..."
                sh 'npm run build'
            }
        }
        stage('Build Docker') {
           steps {
                echo "Building Docker Image..."
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
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
